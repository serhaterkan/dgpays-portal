import React from "react";

interface Item {
  name?: string;
  mailReceivedDate?: string;
  solutionSentDate?: string;
  isBackgroundColorRed?: boolean;
}

interface Props {
  source: Item[];
}

const Grid: React.FC<Props> = ({ source }) => {
  return (
    <table>
      <tbody>
        {source.map((e) => (
          <tr
            key={e.name}
            style={{
              ...(e.isBackgroundColorRed
                ? {
                    background: "red",
                  }
                : {}),
            }}
          >
            <td>{e.name}</td>
            <td>{e.mailReceivedDate}</td>
            <td>{e.solutionSentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
