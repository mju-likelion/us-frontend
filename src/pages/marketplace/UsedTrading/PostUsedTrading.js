import React, { useState } from "react";
import { Button, Form, Input, Upload } from "antd";
import { axiosInstance } from "api";
import { useAppContext } from "../../../store";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    store: { jwtToken },
  } = useAppContext();

  const history = useHistory();

  const [fileList, setFileList] = useState([]);

  const [fieldErrors] = useState({});

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleFinish = async (fieldValues) => {
    const {
      board_type,
      title,
      caption,
      photo: { fileList },
    } = fieldValues;

    const formData = new FormData();
    formData.append("board_type", board_type);
    formData.append("title", title);
    formData.append("caption", caption);
    fileList.forEach((file) => {
      formData.append("photo", file.originFileObj);
    });

    const headers = { Authorization: `JWT ${jwtToken}` };
    try {
      const response = await axiosInstance.post("/api/posts/", formData, {
        headers,
      });
      console.log("success response :", response);
      history.push("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  return (
    <Form {...layout} onFinish={handleFinish} autoComplete={"false"}>
      <Form.Item
        label="타입"
        name="board_type"
        rules={[{ required: true, message: "타입을 입력하세요" }]}
        hasFeedback
        {...fieldErrors.title}
        {...fieldErrors.non_field_errors}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="제목"
        name="title"
        rules={[{ required: true, message: "제목을 입력해주세요." }]}
        hasFeedback
        {...fieldErrors.title}
        {...fieldErrors.non_field_errors}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="내용"
        name="content"
        rules={[{ required: true, message: "내용을 입력해주세요." }]}
        hasFeedback
        {...fieldErrors.caption}
      >
        <Input.TextArea rows={20} />
      </Form.Item>

      <Form.Item
        label="사진"
        name="image"
        rules={[{ required: true, message: "사진을 입력해주세요." }]}
        hasFeedback
        {...fieldErrors.photo}
      >
        <Upload
          listType="picture-card"
          fileList={fileList}
          beforeUpload={() => {
            return false;
          }}
          onChange={handleUploadChange}
        >
          {fileList.length > 0 ? null : (
            <div>
              <div className="ant-upload-text">Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
