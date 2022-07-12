import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import styles from './ReviewDetails.module.css';

export default function ReviewDetails({ reviewItem, userItem }) {
  return (
    <Card className="p-4 my-3" key={userItem.id}>
      <div className="d-flex align-items-center gap-3">
        <div className={styles.user__image}>
          <img src={userItem.image} alt={userItem.name} />
        </div>
        <div>
          <h6 className="mb-0">{userItem.name}</h6>
          <p className="mb-0">{userItem.title}</p>
        </div>
      </div>
      <div className="mt-2">
        <span>
          <Rating
            initialRating={reviewItem.ratting}
            readonly={true}
            fullSymbol={<FaStar className="main__color" />}
            emptySymbol={<FaStar className="gray__color" />}
          />
        </span>
      </div>
      <p className="mb-0">{reviewItem.review}</p>
    </Card>
  );
}
