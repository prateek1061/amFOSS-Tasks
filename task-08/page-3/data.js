// Returns a json data for chart 
// The data tells about the sale of particular pizza on a random day

function getRandomJson() {
    var cdata = [{
        "_id": "585b544f5c86b6c8537c34d6",
        "pizza": "Pepperoni",
        "sold": Math.floor(Math.random() * (100 - 20 + 1)) + 20,
    }, {
        "_id": "585b54505c86b6c8537c34d7",
        "pizza": "Farmhouse",
        "sold": Math.floor(Math.random() * (80 - 1 + 1)) + 1,
    }, {
        "_id": "585b54515c86b6c8537c34d8",
        "pizza": "Veggie Paradise",
        "sold": Math.floor(Math.random() * (90 - 20 + 1)) + 20,
    }, {
        "_id": "585b54525c86b6c8537c34d9",
        "pizza": "Peppy Panner",
        "sold": Math.floor(Math.random() * (50 - 40 + 1)) + 40,
    }, {
        "_id": "585b54535c86b6c8537c34da",
        "pizza": "VEGGIE PARADISE",
        "sold": Math.floor(Math.random() * (85 - 20 + 1)) + 20,
    }];
    return cdata;
}

const whole_data = getRandomJson();
const pizza_name = [];
const pizza_sold = [];


for (const data of whole_data) {
    pizza_name.push(data.pizza);
    pizza_sold.push(data.sold);
}

const myChart = new Chart("myChart", {
  type: "bar",
  
  data: {
    labels: pizza_name,
    datasets: [
      {
        label: "Pizzas",
        backgroundColor: ["#2e003e" , "#3d2352" , "#3d1e6d" , "#8874a3" ,"#e4dcf1"],
        data: pizza_sold,
      },
    ],
  },
  options: {
    label:{ display: false},
    legend: { display: true },
    title: {
      display: true,
      text: "Pizza Sales on a Random Day",
    },
  },
});