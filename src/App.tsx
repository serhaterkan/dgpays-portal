import * as React from "react";
import Grid from "./components/Grid";
import dataList from "./data.json";
import "./styles.css";
import moment from "moment";

function control(today: string, limit: number) {
  const nodes = Array.from(document.querySelectorAll("tr"));
  let errCount = 0;
  nodes.forEach((e) => {
    const startDate = e.querySelectorAll("td")[1].innerText;
    const endDate = e.querySelectorAll("td")[2].innerText;
    const bgColor = e.style.background;

    const diff = moment(endDate ? endDate : today).diff(
      moment(startDate),
      "day"
    );
    if (diff > limit && bgColor !== "red") {
      errCount += 1;
    } else if (diff <= limit && bgColor !== "") {
      errCount += 1;
    }
  });
  return errCount;
}

export default function App() {
  let sourceProp = dataList;
  const [limit, setLimit] = React.useState<number>(0);
  const [date, setDate] = React.useState<string>(
    moment(new Date()).format("YYYY-MM-DD").toLocaleString()
  );
  const [errCount, setErrCount] = React.useState<number>(0);

  const onFinish = () => {
    setErrCount(control(date, limit));
  };

  return (
    <div>
      <h1>Dgpays Case Study </h1>
      <Grid source={sourceProp} />
      <div>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        />
        <input
          type="date"
          date-format="YYYY MM DD"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={onFinish}>Control</button>
      </div>
      {errCount !== 0 && <p>Error row count :{errCount}</p>}
    </div>
  );
}
