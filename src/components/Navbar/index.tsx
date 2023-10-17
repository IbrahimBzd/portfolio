import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout, Menu, Button, Drawer, Row } from 'antd';
import { Context } from '../../core/Context';
import './styles.scss';
import { formattedMessages } from '../../utils/formattedMessages';
import MenuIcon from '../../assets/Icons/Menu';

const { Header } = Layout;

function NavbarManu({ mode }) {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = () => {
    switch (i18n.language) {
      case 'en':
        i18n.changeLanguage('fr');
        window.location.reload();
        return;
      default:
        i18n.changeLanguage('en');
        window.location.reload();
        break;
    }
  };
  const refsContext = React.useContext(Context);

  function OnClick(ref) {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Menu
      className="!bg-transparent navbar !flex-auto !justify-end"
      mode={mode}
    >
      <Menu.Item key="0">{t(formattedMessages.home)}</Menu.Item>
      <Menu.Item key="1" onClick={() => OnClick(refsContext.aboutRef)}>
        {t(formattedMessages.about)}
      </Menu.Item>
      <Menu.Item key="2" onClick={() => OnClick(refsContext.servicesRef)}>
        {t(formattedMessages.services)}
      </Menu.Item>
      <Menu.Item key="3" onClick={() => OnClick(refsContext.projectsRef)}>
        {t(formattedMessages.projects)}
      </Menu.Item>
      <Menu.Item key="4" onClick={() => OnClick(refsContext.contactMeRef)}>
        {t(formattedMessages.contact)}
      </Menu.Item>
      <Menu.Item key="5" className="lang" onClick={changeLanguageHandler}>
        <span className="font-inter !font-bold text-lg md:text-base">
          {i18n.language === 'en-US' || 'en' ? 'en ' : 'fr '}
        </span>
        <span className="font-inter !font-bold text-lg md:text-base">
          /{i18n.language === 'fr' ? ' en' : ' fr'}
        </span>
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
      <Header className="!bg-transparent !py-0 !px-2 xs:!px-2 sm:!px-4 lg:!px-12 !mx-0">
        <Row justify="space-between" align="middle" className="!flex-nowrap">
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
        >
          <NavbarManu mode="vertical" />
        </Drawer>
      </Header>
    </Layout>
  );
}

export default Navbar;
