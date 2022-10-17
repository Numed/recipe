import {
  Section,
  SendMessage,
  ContactInner,
  ContactInput,
  ContactInputSection,
  ContactLabel,
  GetInTouch,
  GetInTouchInner,
  GetInnerTitle,
  GetInputs,
  GetTextArea,
  GreenBox,
  GreenTextSection,
  GreenTitle,
  GrenSubtitle,
  GroupInputs,
  BackgroundImg,
} from "./style";

const ContactSection = () => {
  return (
    <Section>
      <BackgroundImg />
      <ContactInner>
        <GreenBox className="green-box">
          <GreenTextSection>
            <GreenTitle className="green-title">Let's get in touch </GreenTitle>
            <GrenSubtitle className="green-subtitle">
              We're open for any suggestion or just to have a chat
            </GrenSubtitle>
          </GreenTextSection>
        </GreenBox>
        <GetInTouch className="get-in__touch">
          <GetInTouchInner>
            <GetInnerTitle>Get in touch</GetInnerTitle>
            <GetInputs>
              <GroupInputs>
                <ContactInputSection>
                  <ContactLabel>Full name</ContactLabel>
                  <ContactInput
                    className="input-text"
                    type="text"
                    placeholder="Name"
                  />
                </ContactInputSection>
                <ContactInputSection>
                  <ContactLabel>Email Address</ContactLabel>
                  <ContactInput
                    className="input-text"
                    type="text"
                    placeholder="Email"
                  />
                </ContactInputSection>
              </GroupInputs>
              <ContactInputSection className="longer">
                <ContactLabel>Subject</ContactLabel>
                <ContactInput
                  className="input-text"
                  type="text"
                  placeholder="Subject"
                />
              </ContactInputSection>
              <ContactInputSection className="longer">
                <ContactLabel>Message</ContactLabel>
                <GetTextArea className="get-text__area" />
              </ContactInputSection>
            </GetInputs>
            <SendMessage className="button">Send Message</SendMessage>
          </GetInTouchInner>
        </GetInTouch>
      </ContactInner>
    </Section>
  );
};

export default ContactSection;
