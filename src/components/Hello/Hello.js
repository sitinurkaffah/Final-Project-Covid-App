import Button from "../ui/Button";
import StyledHello from "./HelloStyled";


function Hello() {
  return (
    <StyledHello>
    <div>
      <section>
        <div className="left">
          <h2>Covid ID</h2>
          <h3>
            Monitoring Perkembangan Covid
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <Button as="a" href='https://covid19.go.id/vaksin-covid19' 
          target={"_blank"} 
          variant="secondary" 
          size="md">
            Vaccine 
          </Button>
        </div>
        <div className="right">
          <img
            src={`${process.env.PUBLIC_URL}/image1.png`}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
    </StyledHello>
  );
}

export default Hello;