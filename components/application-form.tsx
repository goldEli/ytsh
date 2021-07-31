import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Modal,
  Typography,
} from "antd";
import React, { useState } from "react";
import { phone, wechat } from "../lib/constants";
import { city } from "../static/city";
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const ApplicationForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      const params = {
        ...values,
        region: values.region.join("/"),
      };
      console.log(params);
      setLoading(true);
      fetch("/api/send_mail?" + new URLSearchParams(params), {
        mode: "cors", // no-cors, *cors, same-origin
      }).then((res) => {
        console.log(res);
        setLoading(false);
        if (res.ok) {
          Modal.success({
            title: "申请成功",
            icon: <CheckCircleOutlined />,
            content: `感谢信任，稍后会有客服人员与您联系。`,
            okText: "确认",
            cancelText: "取消",
          });
        } else {
          Modal.error({
            title: "申请失败",
            icon: <ExclamationCircleOutlined />,
            content: `请与客服联系。电话: ${phone}，微信号：${wechat}`,
            okText: "确认",
            cancelText: "取消",
          });
        }
      });
    });
  };

  return (
    <div className="px-10 py-10 bg-gray-100">
      <Typography.Title level={3}>POS机免费领取申请</Typography.Title>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} form={form}>
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: "请输入姓名" }]}
        >
          <Input placeholder="请输入"/>
        </Form.Item>
        <Form.Item
          name="phone"
          label="手机号码"
          rules={[{ required: true, message: "请输入手机号" }]}
        >
          <Input placeholder="请输入"/>
        </Form.Item>
        <Form.Item
          name="region"
          label="选择地区"
          rules={[{ required: true, message: "请选择地区" }]}
        >
          <Cascader options={city} placeholder="请选择" />
        </Form.Item>
        <Form.Item
          name="address"
          label="详细地址"
          rules={[{ required: true, message: "请选择详细地址" }]}
        >
          <Input placeholder="请输入"/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button loading={loading} type="primary" onClick={onSubmit}>
            确认提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ApplicationForm;
