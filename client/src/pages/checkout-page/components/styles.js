import styled from 'styled-components';

import { Order } from '../../../share/components';
import { ButtonPrimary } from '../../../share/styled-components/Button';

export const Section = styled.section`
  padding-bottom: 160px;
  @media (min-width: 960px) {
    padding-bottom: 0px;
  }
`;

export const OrderPreview = styled(Order)`
  grid-area: order;
`;
export const FormContent = styled.div`
  grid-area: form;
  @media (min-width: 960px) {
    max-width: 530px;
  }
`;
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'order'
    'form'
    'payment';
  @media (min-width: 960px) {
    grid-template-columns: 1fr 350px;
    grid-template-rows: 0.6fr 1.4fr;
    gap: 0px 80px;
    grid-template-areas:
      'form order'
      'form payment';
  }
`;

export const Legend = styled.legend`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  margin-bottom: 16px;
  @media (min-width: 960px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

export const FormSection = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray200);
  & + & {
    margin-top: 16px;
    @media (min-width: 960px) {
      margin-top: 24px;
    }
  }
  @media (min-width: 960px) {
    padding-bottom: 24px;
  }
`;
export const AddressDetails = styled.div`
  display: flex;
  margin-bottom: -12px;
  @media (min-width: 960px) {
    margin-bottom: -16px;
  }
  label {
    color: var(--gray600);
    input {
      margin-top: 4px;
    }
  }
`;
export const PaymentCardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OrderPayment = styled.footer`
  grid-area: payment;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 16px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -16px 32px rgba(75, 75, 124, 0.05),
    0px 0px 4px rgba(75, 75, 124, 0.1);
  @media (min-width: 960px) {
    position: relative;
    max-width: 350px;
    box-shadow: none;
    background-color: transparent;
  }
`;
export const OrderPaymentSection = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-weight: ${({ toPay }) => toPay && '500'};
  margin-top: ${({ toPay }) => toPay && '18px'};
  @media (min-width: 480px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 8px;
  }
`;
export const DividingLine = styled.div`
  width: 100%;
  border-bottom: 1px dashed var(--gray200);
  padding-bottom: 4px;
  @media (min-width: 480px) {
    padding-bottom: 8px;
  }
`;
export const CheckoutFormButton = styled(ButtonPrimary)`
  margin-top: 16px;
  @media (min-width: 960px) {
    width: 100%;
    margin-top: 32px;
  }
`;
export const ArtemPromises = styled.p`
  margin-top: 24px;
`;
export const ErrorsMessage = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: var(--status-error);
  position: relative;
  bottom: 20px;
`;
export const InputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 20px;
    transform: translate3d(0, -50%, 0);
    top: 50%;
  }
`;
