import React from "react";
import "./Review.css";
import Ratings from "./Ratings";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Review() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h3 className="based_on_review_div">Based on 0 reviews</h3>
            <h2>0.0</h2>
            <p className="overall">overall</p>

            <div className="star_rating">
              <div className="star_padding">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="progress_bar_div">
                <progress
                  id="file"
                  value="0"
                  max="100"
                  className="progress_bar"
                ></progress>
              </div>
              &nbsp; &nbsp;
              <label className="rating_label">0</label>
            </div>

            <div className="star_rating">
              <div className="star_padding">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                {/* <i class="fa fa-star" aria-hidden="true"></i> */}
                <span class="fa fa-star checked"></span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="progress_bar_div">
                <progress
                  id="file"
                  value="0"
                  max="100"
                  className="progress_bar"
                ></progress>
              </div>
              &nbsp; &nbsp;
              <label className="rating_label">0</label>
            </div>

            <div className="star_rating">
              <div className="star_padding">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="progress_bar_div">
                <progress
                  id="file"
                  value="0"
                  max="100"
                  className="progress_bar"
                ></progress>
              </div>
              &nbsp; &nbsp;
              <label className="rating_label">0</label>
            </div>

            <div className="star_rating">
              <div className="star_padding">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="progress_bar_div">
                <progress
                  id="file"
                  value="0"
                  max="100"
                  className="progress_bar"
                ></progress>
              </div>
              &nbsp; &nbsp;
              <label className="rating_label">0</label>
            </div>

            <div className="star_rating">
              <div className="star_padding">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="progress_bar_div">
                <progress
                  id="file"
                  value="0"
                  max="100"
                  className="progress_bar"
                ></progress>
              </div>
              &nbsp; &nbsp;
              <label className="rating_label">0</label>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <h3 className="add_review">Add a review</h3>

            <form>
              <div className="rating_form_flex">
                <label className="your_review_label">Your Review</label>
                <Ratings />
              </div>

              <div className="rating_form_flex">
                <label className="your_review_label">Your Review</label>
                <textarea className="text_area1" />
              </div>

              <div className="rating_form_flex">
                <label className="your_review_label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input name="name" className="input_box" />
              </div>

              <div className="rating_form_flex">
                <label className="your_review_label">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input name="name" className="input_box" />
              </div>

              <div className="rating_form_flex">
                <label className="your_review_label">
                  Mobile <span style={{ color: "red" }}>*</span>
                </label>
                <input name="name" className="input_box" />
              </div>

              <button className="add_review_btn">Add Review</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Review;
