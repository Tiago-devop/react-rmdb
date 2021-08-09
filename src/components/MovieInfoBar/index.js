// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Styles
import { Wrapper, Content, Column } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <Column>
        <p>Running time: {calcTime(time)}</p>
      </Column>
      <Column>
        <p>Budget: {convertMoney(budget)}</p>
      </Column>
      <Column>
        <p>Revenue: {convertMoney(revenue)}</p>
      </Column>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
