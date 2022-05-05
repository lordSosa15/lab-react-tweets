import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import Actions from "./Actions";
import ProfileImage from "./ProfileImage";


function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image}/>

      <div className="body">

        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>

          <Timestamp userData={props.tweet.timestamp} />
        
        </div>

        <Message userData={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>

    </div>
  );
}

export default Tweet;