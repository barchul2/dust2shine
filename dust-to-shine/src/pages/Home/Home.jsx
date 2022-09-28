import React, { useState } from "react";
import { Grid, Button, FormControl, TextField} from "@mui/material";
import Datacard from "../../components/Datacard"
import "./home.css";

const Home = () => {

  const [numUnits,setNumUnits] = useState(0);

  const onChangeUnit=()=>{
    console.log(document.getElementById("outlined-number").value);
    setNumUnits(document.getElementById("outlined-number").value);

  }
  return (

    <div>
      <section>
        <div>
          <Grid container>
            <Grid item className="home-landing-banner" xs={12} md={12} lg={6} xl={6}>
              <div className="home-landing-banner-text">
                <h1>Transparent Pricing.</h1>
                <h1>Exceptional Cleaning Solutions.</h1>
                <Button variant="outlined">Learn More</Button>
              </div>
            </Grid>

            <Grid item className="home-landing-banner" xs={12} md={12} lg={6} xl={6}>
              <div className="home-datacards">
                <Datacard
                  title="Valet Trash Service"
                  text="Our valet trash service prioritizes affordability, consistancy, and ensures 
                our customers can spending their time offering the best experience for their tenants."
                  link="#valet-trash"
                />

                <Datacard
                  title="Move Out Service"
                  text="We offer a comprhensive cleaning service that fits your schedule and needs. Easily schedule your move out clean and we will complete
                the rest."
                  link="#moveout"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section>
        <Grid container className="home-landing-about">

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <div className="home-landing-about-video">
              <video
                width="80%"
                autoplay="autoplay"
                loop="true"
                src="https://player.vimeo.com/progressive_redirect/playback/738494385/rendition/1080p/file.mp4?loc=external&signature=f451048a6b01a5ab75eccfe8aed1723b674def9f1fe128efd7869f701fc4baa6" />
              <Button variant="outlined">Price Calculator</Button>
            </div>

          </Grid>
        </Grid>
      </section>

      <section>
        <Grid container className="price-calculator">
          <Grid item xs={12} md={12} lg={12} xl={12} className="price-calculator-item">
            <div>
              <h1>Valet Trash Service Price Calculator</h1>
              <FormControl >
                <TextField
                onChange={onChangeUnit}
                  id="outlined-number"
                  label="Number of Units"
                  type="number"
                  style={{marginTop:'1em'}}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
              
              <div className="price-calculator-item" style={{marginTop:'4em'}}> 
                <h1>${numUnits * 12} / Month</h1>
              </div>
              
              <div className="price-calculator-item" style={{marginTop:'2em'}}>
              <h5>What's Included</h5>

              </div>
              <div className="price-calculator-item"> 


                <ul>
                  <li>Trash Bin For Each Unit</li>
                  <li>Common Area Cleanup</li>
                  <li>Trash Pickup Twice Weekly</li>
                </ul>
              </div>



            </div>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12} className="price-calculator-item">

          </Grid>

        </Grid>
      </section>
    </div>


  );
};

export default Home;
