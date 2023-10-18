import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Layout, Row } from 'antd';
import { formattedMessages } from '../../utils/formattedMessages';
import './styles.scss';
import privateRoutes from '../../entrypoint/ProtectedApp/privateRoutes';
import CustomButton from '../CustomButton';

const { Header } = Layout;

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
          <div className="menu-container !flex justify-end w-full">
            <CustomButton
              className="!px-3 !py-2 !text-xs md:!text-base md:!px-5 md:!py-2"
              onClick={() => {
                navigate(privateRoutes.app.path);
              }}
            >
              {t(formattedMessages.homeHello)}
            </CustomButton>
          </div>
        </Row>
      </Header>
    </Layout>
  );
}

export default Navbar;
