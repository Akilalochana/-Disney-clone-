import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>learning web development with react , tailwind css</h3>
        <div className="play-video-info">
          <p>15k views &bull; 10 days ago</p>
          <div>
            <span><img src={like} alt="" />2k</span>
            <span><img src={dislike} alt="" />252</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="" />
          <div>
            <p>Greatstack</p>
            <span>1.5M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>channne dsijd jowas osw</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt !</p>
          <hr />
          <h4>652 Comments</h4>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          <div className="comment">
            <img src={user_profile} alt="" />
            <div>
              <h3>Akila Lochana <span>2 day ago</span></h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, soluta praesentium a voluptatibus ullam eius quas nihil porro debitis in quam veniam tenetur ipsam laboriosam, aliquid placeat cumque exercitationem. Distinctio!</p>
               <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
               </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default PlayVideo