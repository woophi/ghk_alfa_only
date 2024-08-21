import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import rocket from '../assets/rocket.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={rocket} width={135} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="large" defaultMargins weight="bold">
          Спасибо за Ваш выбор!
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Свяжитесь с вашим персональным менеджером, чтобы перейти в Alfa Only
        </Typography.Text>
      </div>
      <Gap size={128} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" className={appSt.btn} href="alfabank://user_profile">
          Перейти в Профиль
        </ButtonMobile>
      </div>
    </>
  );
};
