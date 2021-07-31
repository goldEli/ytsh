import Container from "./container";
import { EXAMPLE_PATH, phone, wechat } from "../lib/constants";
import Logo from "./logo";
import { Button, message } from "antd";

const Footer = () => {
  function copy(text: string) {
    var input = document.createElement("textarea");
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand("copy");
    document.body.removeChild(input);
    message.success("复制成功！")
    return result;
  }

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="px-20 py-3 bg-black text-white flex flex-col lg:flex-row items-center">
        <div className="flex-1 flex flex-col justify-items-center items-center">
          <div className="flex flex-row">
            <span className="px-2">微信号: {wechat}</span>
            <Button
              onClick={() => copy(wechat)}
              size="small"
            >
              复制微信号
            </Button>
          </div>
          <p>电话: {phone}</p>
          <p>Copyright © 2019-2021 pos机排行榜 版权所有</p>
        </div>
        <div className="flex-1 flex flex-col justify-items-center items-center">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
