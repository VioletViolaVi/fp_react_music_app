import React from "react";

const allSingersInfo = [
  {
    id: 1,
    name: "Mariah Carey",
    musicType: "R&B",
    intro:
      "Mariah Carey is an American singer, songwriter, actress, and record producer. Referred to as the 'Songbird Supreme' and the 'Queen of Christmas', she is known for her five-octave vocal range, melismatic singing style, and signature use of the whistle register."
  },
  {
    id: 2,
    name: "Rihanna",
    musicType: "R&B",
    intro:
      "Robyn Rihanna Fenty born February 20, 1988) is a Barbadian singer, actress, and businesswoman. Born in Saint Michael and raised in Bridgetown, Barbados, Rihanna was discovered by American record producer Evan Rogers who invited her to the United States to record demo tapes."
  }
];

export default class Artists extends React.Component {
  render() {
    return (
      <>
        {allSingersInfo.map((singleObj) => {
          return (
            <>
              <h2>{singleObj.name}</h2>
              <p>{singleObj.musicType}</p>
              <p>{singleObj.intro}</p>
            </>
          );
        })}
      </>
    );
  }
}
