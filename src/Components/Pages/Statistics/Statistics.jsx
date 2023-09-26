import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const getDonationCard = JSON.parse(localStorage.getItem("donation"));

  const data = [
    { name: "Group A", value: getDonationCard ? getDonationCard.length : 0 },
    {
      name: "Group B",
      value: getDonationCard ? 12 - getDonationCard.length : 12,
    },
  ];
  return (
    <div>
      <div className="flex h-[90vh] items-center justify-center flex-col">
        <div className="w-60 mx-auto ">
          <div className="bg-[#fff] mx-auto h-48 sm:h-72 rounded-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={800} height={800}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={95}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-10">
          <h2 className="flex gap-2 items-center text-sm font-semibold">
            Your Donation :{" "}
            <span className="h-2 w-20 block bg-[#00C49F]"></span>
          </h2>
          <h2 className="flex gap-2 items-center text-sm font-semibold">
            Total Donation :{" "}
            <span className="h-2 w-20 block bg-[#FF444A]"></span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
