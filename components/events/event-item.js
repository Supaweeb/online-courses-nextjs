import Link from 'next/link'
import Image from 'next/image'
import classes from './event-item.module.css'
import Button from '../ui/button'
import ArrowRightIcon from '../icons/arrow-right-icon'
import DateIcon from '../icons/date-icon'

function EventItem (props) {
  const { title, image, date, location, id } = props

  const humanReadableDate = new Date(date).toLocaleDateString('th-Th', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <Image
        src={`/${image}`}
        alt={title}
        width={1000}
        height={500}
        className={classes.image}
      />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
