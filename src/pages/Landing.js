import React from "react";
import { GET_APOD } from "../api";
import { makeFetch } from "../utils";
import YTPlayer from "../components/YTPlayer";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apodUrl: "",
      apodExplanation: "",
      mediaType: ""
    };
  }
  componentDidMount() {
    if (!this.state.apodUrl) {
      makeFetch({
        url: GET_APOD,
        onSuccess: response =>
          this.setState(() => ({
            apodUrl: response.url,
            apodExplanation: response.explanation,
            mediaType: response.media_type
          })),
        useKey: true
      });
    }
  }
  render() {
    const {
      apodUrl,
      apodExplanation,
      mediaType
    } = this.state;

    if (!apodUrl) {
      return null;
    }
    return (
      <div className="page">
        <h1>Pic of the Day</h1>
        {mediaType === "video" ? (
          <YTPlayer embedUrl={apodUrl} />
        ) : (
          <img className="large-image" src={apodUrl} alt="apod" />
        )}
        <p>{apodExplanation}</p>
      </div>
    );
  }
}

export default Landing;
