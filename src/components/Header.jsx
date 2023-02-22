import {Link} from 'react-scroll';

const Header = () => {
  return (
    <nav className=' flex justify-between align-center p-4 bg-gradient-rainbow rounded-lg'>
        <span id='logo' className=' text-2xl text-bold'>
          <Link>PS</Link>
        </span>
        <span id='navbar' className='flex gap-4'>
          <Link>Home</Link> 
          <Link>About</Link> 
          <Link>Works</Link> 
          <Link>Testimonials</Link>
          <Link>Contact</Link>
        </span>
    </nav>
  )
}

export default Header