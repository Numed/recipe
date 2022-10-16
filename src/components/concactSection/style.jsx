import styled from "styled-components";
import bg from "../../img/contacts-background.jpg";

export const Section = styled.section`
  width: 100%;
  height: 95vh;
  position: relative;
`;

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  filter: blur(3px);
`;

export const ContactInner = styled.div`
  width: 65%;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 4px 4px rgba(82, 183, 136, 0.5);
`;

export const GreenBox = styled.div`
  height: 100%;
  width: 35%;
  background-color: #52b788;
`;

export const GreenTextSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 35px;
`;

export const GreenTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const GrenSubtitle = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const GetInTouch = styled.div`
  height: 100%;
  width: 66.6%;
  background-color: #fff;
`;

export const GetInTouchInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 35px;
  flex-direction: column;
`;

export const GetInnerTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #2f2f2f;
  margin-bottom: 20px;
`;

export const GetInputs = styled.div`
  width: 100%;
  height: 100%;
`;

export const GroupInputs = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactInputSection = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  &.longer {
    width: 100%;
  }
`;

export const ContactLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;
  color: #2f2f2f;
  margin-top: 25px;
`;

export const ContactInput = styled.input`
  padding: 0 15px 2px 5px;
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #2f2f2f;
  letter-spacing: 1.2px;
  width: 100%;

  &:active,
  &:focus {
    transition: all 0.2s linear;
    border-bottom-color: #52b788;
  }
`;

export const GetTextArea = styled.textarea`
  resize: none;
  margin-top: 15px;
  border-bottom: 1px solid #ccc;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #2f2f2f;
  padding: 10px;
  height: 120px;
  overflow-y: scroll;
  width: 100%;
  font-family: "Montserrat", sans-serif;

  &:active,
  &:focus {
    transition: all 0.2s linear;
    border-bottom-color: #52b788;
  }
`;

export const SendMessage = styled.button`
  background-color: #52b788;
  padding: 6px 12px;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  text-align: center;
  letter-spacing: 1.2px;
  color: #ffffff;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s linear;
    background-color: #47a177;
  }
`;
