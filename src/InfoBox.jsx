import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({ info }) {
  if (!info || !info.temp) {
    return <p>🔍 Please search for a city to see the weather.</p>;
  }

 const imageUrl ="https://unsplash.com/photos/orange-and-gray-clouds-during-sunset-ZVhm6rEKEX8";
const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop";
const COLD_URL = "https://images.unsplash.com/photo-1608889175118-258c4f2447b5?w=600&auto=format&fit=crop";
const RAIN_URL = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop";




  return (
    <div className="InfoBox" style={{ padding: '20px' }}>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
            alt="Weather visual"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">{info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}</Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i>, feels like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
