import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./twitter.css";

const Twitter = () => {
  const [tweets, setTweets] = useState([
    {
      id: 0,
      tweet:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      likes: 56,
      isLiked: false,
    },

    {
      id: 1,
      tweet:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ",
      likes: 116,
      isLiked: false,
    },
    {
      id: 2,
      tweet:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ",
      likes: 116,
      isLiked: false,
    },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e, tweets, setTweets, input, setInput) => {
    e.preventDefault();
    const id = tweets.length ? tweets.length : 0;

    setTweets([
      { id: id, tweet: input, likes: Math.floor(Math.random() * 100) },
      ...tweets,
    ]);
    setInput("");
    setShow(false);
  };

  const updateLike = (e, id) => {
    e.preventDefault();
    const updatedData = tweets.map((data) =>
      data.id === id ? { ...data, likes: data.likes + 1, isLiked: true } : data
    );
    setTweets(updatedData);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className=' mb-5'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) =>
              handleSubmit(e, tweets, setTweets, input, setInput)
            }
          >
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Control
                as='textarea'
                rows={3}
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            </Form.Group>
            <Button
              className='btn btn-search-bar float-right'
              variant='primary'
              type='submit'
            >
              Post Tweet
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div className='col-6 ml-5'>
        <ol className='tweet-list'>
          {tweets.map((data) => (
            <li className='tweet-card mt-3'>
              <div className='tweet-content'>
                <div>
                  <span className='fullname'>
                    <strong>Rajat Bhatt</strong>
                  </span>
                  <span> @rajatbh_21</span>
                </div>
                <div>
                  <img
                    className='tweet-card-avatar'
                    src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
                    alt=''
                  />
                </div>

                <p className='mt-3'>{data.tweet}</p>

                <div>
                  {data.isLiked ? (
                    <i class='fas fa-heart'></i>
                  ) : (
                    <i
                      class='far fa-heart'
                      onClick={(e) => updateLike(e, data.id)}
                    ></i>
                  )}

                  <span>
                    {"  "}
                    {data.likes}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className='container'>
        <Button
          className='btn btn-primary float-btn'
          style={{ bottom: 20, right: "20vw", position: "fixed" }}
          onClick={handleShow}
        >
          <i class='fab fa-twitter'></i>
        </Button>
      </div>
    </div>
  );
};

export default Twitter;
