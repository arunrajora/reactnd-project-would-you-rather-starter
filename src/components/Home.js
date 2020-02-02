import React from "react";
import { Tab } from "semantic-ui-react";
import QuestionList from "./QuestionList";

const Home = ({ answeredQuestions, unansweredQuestions, history }) => {
  return (
    <Tab
      renderActiveOnly
      panes={[
        {
          menuItem: "Unanswered Questions",
          render: () => (
            <Tab.Pane attached={false}>
              <QuestionList
                questions={unansweredQuestions}
                selectedTab="unanswered"
                history={history}
              />
            </Tab.Pane>
          )
        },
        {
          menuItem: "Answered Questions",
          render: () => (
            <Tab.Pane attached={false}>
              <QuestionList
                questions={answeredQuestions}
                selectedTab="answered"
                history={history}
              />
            </Tab.Pane>
          )
        }
      ]}
    />
  );
};

export default Home;
