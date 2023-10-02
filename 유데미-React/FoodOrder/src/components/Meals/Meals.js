import { Fragment } from "react";
import AvalilableMeals from "./AvalilableMeals";
import MealsSummary from "./MealsSummuery";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalilableMeals />
    </Fragment>
  );
};

export default Meals;
