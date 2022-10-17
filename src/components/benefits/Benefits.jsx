import styled from "styled-components";
import easy from "../../img/icons/easy.png";
import comfort from "../../img/icons/comfort.png";
import friendly from "../../img/icons/friendly.png";
import recipes from "../../img/icons/recipes.png";

const Section = styled.section`
  margin: 120px 0;
  width: 100%;
  height: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 1.7rem;
  line-height: 1.5rem;
  color: #40916c;
  text-align: center;
  margin-bottom: 60px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
  width: 20%;
  box-shadow: 0 0 9px 3px rgba(47, 47, 47, 0.5);
  padding: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  letter-spacing: 1.1px;
  color: #40916c;
  font-weight: 600;
  margin: 10px 0;
`;

const CardImg = styled.img`
  width: 64px;
  height: 64px;
  filter: invert(68%) sepia(8%) saturate(2180%) hue-rotate(100deg)
    brightness(91%) contrast(92%);
  transform: scale(1.2);
`;

const CardText = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: #9f9f9f;
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

const Benefits = () => {
  return (
    <Section>
      <SectionTitle>Why should you choose us?</SectionTitle>
      <CardContainer>
        <CardList>
          <Card className="benetif-card">
            <CardTitle>A lot of recipes</CardTitle>
            <CardImg src={recipes} alt="Recipes Icon" />
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias est cupiditate debitis laborum eos dolor quam fuga
              reprehenderit illum non distinctio, quia ullam excepturi
              laudantium a nam repudiandae, perferendis aperiam.
            </CardText>
          </Card>
          <Card className="benetif-card">
            <CardTitle>Easy to use</CardTitle>
            <CardImg src={easy} alt="Easy to use" />
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias est cupiditate debitis laborum eos dolor quam fuga
              reprehenderit illum non distinctio, quia ullam excepturi
              laudantium a nam repudiandae, perferendis aperiam.
            </CardText>
          </Card>
          <Card className="benetif-card">
            <CardTitle>Your comfort</CardTitle>
            <CardImg src={comfort} alt="Comfort Icon" />
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias est cupiditate debitis laborum eos dolor quam fuga
              reprehenderit illum non distinctio, quia ullam excepturi
              laudantium a nam repudiandae, perferendis aperiam.
            </CardText>
          </Card>
          <Card className="benetif-card">
            <CardTitle>Mobile friendly</CardTitle>
            <CardImg src={friendly} alt="Mobile friendly" />
            <CardText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias est cupiditate debitis laborum eos dolor quam fuga
              reprehenderit illum non distinctio, quia ullam excepturi
              laudantium a nam repudiandae, perferendis aperiam.
            </CardText>
          </Card>
        </CardList>
      </CardContainer>
    </Section>
  );
};

export default Benefits;
