import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import "antd/dist/antd.css";

enum Date {
  MONDAY = "Monday 2nd Nov",
  TUESDAY = "Tuesday 3rd Nov",
  WEDNESDAY = "Wednesday 4th Nov",
  THURSDAY = "Thursday 5th Nov",
}

interface TimetableData {
  key: string;
  group: string;
  [Date.MONDAY]?: string;
  [Date.TUESDAY]?: string;
  [Date.WEDNESDAY]?: string;
  [Date.THURSDAY]?: string;
}

const data: TimetableData[] = [
  {
    key: "1",
    group: "Earth Fire Water Air",
    [Date.THURSDAY]: "3.30pm to 4.30pm",
  },
  {
    key: "2",
    group: "Bad/Good",
    [Date.MONDAY]: "3.30pm to 4.30pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "3",
    group: "Black/White",
    [Date.TUESDAY]: "4.30pm to 5.00pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "4",
    group: "Revolting/Delightful",
    [Date.TUESDAY]: "6.00pm to 6.45pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "5",
    group: "Bride/Groom",
    [Date.MONDAY]: "3.30pm to 4.30pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "6",
    group: "Posh/Lower Class",
    [Date.MONDAY]: "6.15pm to 6.45pm",
    [Date.WEDNESDAY]: "6.30pm to 7.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "7",
    group: "Falling/Rising",
    [Date.TUESDAY]: "8.00pm to 8.30pm",
    [Date.WEDNESDAY]: "8.00pm to 9.00pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "8",
    group: "Past/Future",
    [Date.MONDAY]: "7.15pm to 7.45pm",
    [Date.WEDNESDAY]: "6.30pm to 7.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "9",
    group: "Hot/Cold",
    [Date.TUESDAY]: "7.15pm to 8.00pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "10",
    group: "Nasty/Nice",
    [Date.MONDAY]: "3.30pm to 4.30pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "11",
    group: "Rain/Sun",
    [Date.TUESDAY]: "7.15pm to 8.00pm",
    [Date.WEDNESDAY]: "6.30pm to 7.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "12",
    group: "Weak/Strong",
    [Date.MONDAY]: "3.30pm to 4.30pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "13",
    group: "Land - Sea",
    [Date.TUESDAY]: "5.00pm to 5.30pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "14",
    group: "Royalty/Peasants",
    [Date.MONDAY]: "3.30pm to 4.30pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "15",
    group: "Cops & Robbers",
    [Date.TUESDAY]: "6.45pm to 7.15pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },
  {
    key: "16",
    group: "Guilty/Innocent",
    [Date.MONDAY]: "6.45pm to 7.15pm",
    [Date.WEDNESDAY]: "6.30pm to 7.30pm",
    [Date.THURSDAY]: "4.30pm to 6.00pm",
  },

  {
    key: "17",
    group: "Human/Animal",
    [Date.MONDAY]: "5.30pm to 6.15pm",
    [Date.THURSDAY]: "3.30pm to 4.30pm",
  },
  {
    key: "18",
    group: "Nerds/Jocks",
    [Date.MONDAY]: "4.30pm to 5.00pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "19",
    group: "Male/Female",
    [Date.TUESDAY]: "3.45pm to 4.30pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "20",
    group: "Saints/Sinners",
    [Date.MONDAY]: "8.45pm to 9.15pm",
    [Date.WEDNESDAY]: "7.30pm to 8.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "21",
    group: "Country/City",
    [Date.TUESDAY]: "3.45pm to 4.30pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "22",
    group: "Polka Dots/Stripes",
    [Date.TUESDAY]: "6.00pm to 6.45pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "23",
    group: "Hope/Doubt",
    [Date.TUESDAY]: "8.30pm to 9.00pm",
    [Date.WEDNESDAY]: "8.00pm to 9.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "24",
    group: "Sweet/Sour",
    [Date.TUESDAY]: "5.30pm to 6.00pm",
    [Date.WEDNESDAY]: "3.30pm to 4.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "25",
    group: "Love/Hate",
    [Date.MONDAY]: "7.45pm to 8.15pm",
    [Date.WEDNESDAY]: "8.00pm to 9.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "26",
    group: "Up/Down",
    [Date.TUESDAY]: "6.00pm to 6.45pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "27",
    group: "Beauty/Ugly",
    [Date.MONDAY]: "5.00pm to 5.30pm",
    [Date.WEDNESDAY]: "5.30pm to 6.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "28",
    group: "Happy/sad",
    [Date.TUESDAY]: "3.45pm to 4.30pm",
    [Date.WEDNESDAY]: "4.30pm to 5.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "29",
    group: "Old/New",
    [Date.TUESDAY]: "7.15pm to 8.00pm",
    [Date.WEDNESDAY]: "8.00pm to 9.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "30",
    group: "Warrior/Peacemaker",
    [Date.MONDAY]: "5.00pm to 5.30pm",
    [Date.WEDNESDAY]: "6.30pm to 7.30pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "31",
    group: "Servant/Master",
    [Date.MONDAY]: "8.15pm to 8.45pm",
    [Date.WEDNESDAY]: "7.30pm to 8.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
  {
    key: "32",
    group: "Disease/Health",
    [Date.MONDAY]: "6.45pm to 7.15pm",
    [Date.WEDNESDAY]: "8.00pm to 9.00pm",
    [Date.THURSDAY]: "6.00pm to 7.30pm",
  },
];
const getColumnForDate = (date: Date): ColumnsType<TimetableData> => {
  const times = data
    .map((timetableData) => timetableData[date])
    .filter((time: string | undefined) => time !== undefined)
    .reduce((uniqueTimes: { [K: string]: string }, time) => {
      if (time) {
        uniqueTimes[time] = time;
      }
      return uniqueTimes;
    }, {});
  const filters = Object.keys(times).map((time) => ({
    text: time,
    value: time,
  }));
  return [
    {
      title: date,
      dataIndex: date,
      filters,
      filterMultiple: true,
      onFilter: (value, record) => record[date]?.indexOf(`${value}`) === 0,
      sorter: (a, b) => {
        const aDate = a[date];
        const bDate = b[date];
        if (aDate && bDate) {
          return aDate.localeCompare(bDate);
        }
        if (aDate) {
          return 1;
        }
        if (bDate) {
          return -1;
        }
        return 0;
      },
      sortDirections: ["ascend", "descend"],
    },
  ];
};

const columns: ColumnsType<TimetableData> = [
  {
    title: "Group",
    dataIndex: "group",
    filters: data.map(({ group }) => ({
      text: group,
      value: group,
    })),
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.group.indexOf(`${value}`) === 0,
    sorter: (a, b) => a.group.localeCompare(b.group),
    sortDirections: ["ascend", "descend"],
  },
  ...getColumnForDate(Date.MONDAY),
  ...getColumnForDate(Date.TUESDAY),
  ...getColumnForDate(Date.WEDNESDAY),
  ...getColumnForDate(Date.THURSDAY),
];

const App = () => {
  return (
    <Table
      title={() => "CSSD 2020 Recital Timetable"}
      columns={columns}
      dataSource={data}
      onChange={(pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
      }}
      bordered
      rowClassName={(record, index) =>
        index % 2 === 0 ? "primary" : "secondary"
      }
      size={"middle"}
      pagination={{
        showSizeChanger: true,
      }}
    />
  );
};

export default App;
