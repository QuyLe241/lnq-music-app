"use client";
import React, { useMemo } from "react";
import { RadiusUprightOutlined } from "@ant-design/icons";
import { Button, Divider, notification, Space } from "antd";
import type { NotificationArgsProps } from "antd";
import "./style.scss";

type NotificationPlacement = NotificationArgsProps["placement"];

const Context = React.createContext({ name: "Default" });

const BtnUpgrade: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      duration: 1,
      message: "Thông báo",
      description: (
        <Context.Consumer>
          {({ name }) => "Chức năng đang cập nhật"}
        </Context.Consumer>
      ),
      placement,
    });
  };
  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);
  return (
    <div className="div_btnUpgrade w-1/2">
      <Context.Provider value={contextValue}>
        {contextHolder}

        <Space className="btn_upgrade">
          <Button
            className="py-3 px-5 w-full"
            onClick={() => openNotification("topRight")}
            icon={<RadiusUprightOutlined />}
          >
            Nâng cấp Account
          </Button>
        </Space>
        <Divider />
      </Context.Provider>
    </div>
  );
};

export default BtnUpgrade;
