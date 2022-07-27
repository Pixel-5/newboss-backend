import React, { useContext } from "react";
import { Layout, Menu, Dropdown, Avatar, Button } from "antd";
import { FiBell } from "react-icons/fi";
import { LogoutOutlined } from "@ant-design/icons";
import { AuthContext } from "../helpers/AuthProvider";
import { useTranslation } from "react-i18next";
import { RiGlobalLine } from "react-icons/ri";
import i18next from "i18next";

const { Header } = Layout;

const HeaderMenu = (props) => {
    const langs = [
        {
            code: "gb",
            name: "English",
            countryCode: "gb",
        },
    ];

    const { t } = useTranslation();
    const { signin } = useContext(AuthContext);

    let logout = () => {
        signin(false);
    };

    const langMenu = (
        <Menu>
            {langs.map(({ code, name, countryCode }) => (
                <Menu.Item
                    key={countryCode}
                    onClick={() => {
                        i18next.changeLanguage(code);
                        localStorage.setItem("i18nextLng", code);
                    }}
                >
                    {name}
                </Menu.Item>
            ))}
        </Menu>
    );
    const user_menu = (
        <Menu>
            <Menu.Item
                key="4"
                icon={<LogoutOutlined />}
                onClick={() => logout()}
            >
                {t("Logout")}
            </Menu.Item>
        </Menu>
    );

    return (
        <Header
            style={{ padding: 0 }}>
            <div id="g-header" className="g-header-right float-right">
                <ul className="nav">
                    <li className="nav-item">
                        <Dropdown overlay={langMenu} trigger={["click"]}>
                            <Button shape="circle">
                                <RiGlobalLine size={16} />
                            </Button>
                        </Dropdown>
                    </li>
                    <li className="nav-item">
                        <Dropdown overlay={user_menu} trigger={["click"]}>
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </Header>
    );
};

export default HeaderMenu;
