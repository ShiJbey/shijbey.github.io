import React from "react"

interface Entry {
  title: string
  organization: string
  startDate: string
  endDate: string
}

const DATA: Entry[] = [
  {
    title: "Student Advisory Council",
    organization: "RISE Program: Resources to Insure Successful Engineers",
    startDate: "Sep 2014",
    endDate: "May 2017",
  },
  {
    title: "Club President",
    organization: "UD Computer Animation and Game Design (CAGD)",
    startDate: "May 2015",
    endDate: "May 2016",
  },
  {
    title: "Team Captain",
    organization: "University of Delaware Mascot Team",
    startDate: "May 2014",
    endDate: "May 2016",
  },
]

const LeadershipActivities: React.FC = () => {
  return (
    <div className="container bg-white mb-3 rounded p-3 border shadow">
      <h3 className="text-center mb-3">Leadership & Activities</h3>
      <hr></hr>
      {DATA.map((entry: Entry) => (
        <div>
          <h4>{entry.title}</h4>
          <p>{entry.organization}</p>
          <p>
            {entry.startDate} - {entry.endDate}
          </p>
        </div>
      ))}
    </div>
  )
}

export default LeadershipActivities
