import "./app.css";
import {
   ResponsiveContainer,
   LineChart,
   Line,
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
} from "recharts";
import { data } from "./data";

export default function App() {
   return (
      <div className="app">
         <ResponsiveContainer width={600} aspect={2}>
            <LineChart data={data} syncId={"dataChart"}>
               <XAxis dataKey={"x"} />
               <YAxis />
               <CartesianGrid stroke="gray" strokeWidth={0.2} />
               <Line
                  type="monotone"
                  dataKey={"Valorant"}
                  stroke="orange"
                  strokeWidth={1.4}
                  animationEasing="ease-out"
                  dot={false}
               />
               <Line
                  type="monotone"
                  dataKey={"Apex"}
                  stroke="orangeRed"
                  strokeWidth={1.4}
                  animationEasing="ease-out"
                  dot={false}
               />
               <Tooltip
                  separator=" • "
                  contentStyle={{
                     backgroundColor: "#1f1f1f",
                     border: "2px solid black",
                     borderRadius: 8,
                  }}
                  animationDuration={200}
                  animationEasing="ease-out"
                  cursor={{ fill: "#fff", fillOpacity: 0.07 }}
               />
            </LineChart>
         </ResponsiveContainer>
         <ResponsiveContainer width={600} aspect={2}>
            <BarChart
               data={data}
               syncId={"dataChart"}
               barCategoryGap={10}
               barGap={0}
            >
               <XAxis dataKey={"x"} />
               <YAxis />
               <CartesianGrid stroke="gray" strokeWidth={0.2} />
               <Bar
                  type="monotone"
                  dataKey={"Valorant"}
                  fill="orange"
                  animationEasing="ease-out"
               />
               <Bar
                  type="monotone"
                  dataKey={"Apex"}
                  fill="orangeRed"
                  animationEasing="ease-out"
               />
               <Tooltip
                  separator=" • "
                  contentStyle={{
                     backgroundColor: "#1f1f1f",
                     border: "2px solid black",
                     borderRadius: 8,
                  }}
                  animationDuration={200}
                  animationEasing="ease-out"
                  cursor={{ fill: "#fff", fillOpacity: 0.07 }}
                  position={{ x: 610, y: 10 }}
               />
               <Legend verticalAlign="bottom" height={36} />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}
