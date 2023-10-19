import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Drawer, Row } from 'antd';
import { Context } from '../../core/Context';
import './styles.scss';
import MenuIcon from '../../assets/Icons/Menu';
import ArrowUp from '../../assets/Icons/ArrowUp';
import privateRoutes from '../../entrypoint/ProtectedApp/privateRoutes';

const { Header } = Layout;

function NavbarManu({
  mode,
  setVisible,
}: {
  mode: any;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();

  const refsContext = React.useContext(Context);

  function OnClick(ref) {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
    setTimeout(() => {
      setVisible(false);
    }, 500);
  }

  return (
    <Menu
      className="!bg-transparent navbar !flex-auto !justify-end"
      mode={mode}
    >
      <Menu.Item key="0" onClick={() => OnClick(refsContext.aboutRef)}>
        About
      </Menu.Item>
      <Menu.Item key="1" onClick={() => OnClick(refsContext.servicesRef)}>
        Services
      </Menu.Item>
      <Menu.Item key="2" onClick={() => OnClick(refsContext.projectsRef)}>
        Projects
      </Menu.Item>
      <Menu.Item key="3" onClick={() => OnClick(refsContext.skillsRef)}>
        Skills
      </Menu.Item>
      <Menu.Item
        key="4"
        onClick={() => {
          navigate(privateRoutes.app.contactPath);
        }}
      >
        Contact me
      </Menu.Item>
    </Menu>
  );
}

function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className="!bg-transparent">
      <Header className="!bg-transparent !p-0 !mx-0 navbar-header">
        <Row
          justify="space-between"
          align="middle"
          className="!flex-nowrap gap-14"
        >
          <span className="font-inter font-semibold text-2xl sm:text-3xl lg:text-4xl text-white block ">
            Ibrahim.
          </span>
          <div className="menu-container !hidden md:!flex justify-end w-full">
            <NavbarManu mode="horizontal" />
          </div>
          <div className="md:!hidden ">
            <Button
              className="!bg-transparent !border-none !shadow-none !outline-none !text-white !w-fit"
              type="primary"
              onClick={showDrawer}
            >
              <MenuIcon className="w-6" />
            </Button>
          </div>
        </Row>
        <Drawer
          title=""
          placement="top"
          onClose={onClose}
          visible={visible}
          className="navbar-menu"
          closeIcon={<ArrowUp currentcolor="#888" />}
        >
          <NavbarManu setVisible={setVisible} mode="vertical" />
        </Drawer>
      </Header>
    </Layout>
  );
}

export default Navbar;
