import React from 'react'
import Hamburger from './icons/hamburger'
import X from './icons/x'
import Link from 'next/link'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.links = [
      { href: '/mission', label: 'Our Mission', key: 'our-mission' }
    ]

    this.buttons = [
      { href: '/donate', label: 'Donate', key: 'nav-link-donate' }
    ]
    this.state = {
      drawerOpen: false
    }
  }

  toggleDrawerOpen = () => {
    const { drawerOpen } = this.state
    if (!drawerOpen) {
      document.body.classList.add('no-scroll')
      document.getElementById('hamburger-icon').classList.add('dn')
    } else {
      document.body.classList.remove('no-scroll')
      document.getElementById('hamburger-icon').classList.remove('dn')
    }

    this.setState({ drawerOpen: !drawerOpen })
  }

  render () {
    return (
      <nav>
        <div className='f6 f5-m tf-lato bg-white pv4 flex fl w-100 pl5-ns pr5-ns pl4 pr3 z-1'>
          <div className='w-70-l mh-auto b--tf-yellow flex justify-between flex-row w-100'>
            <div className='pointer tc'>
              <Link href='/'>
                <img src='/static/images/Logo_with_text.png' className='w4' alt='The Teacher Fund – Home' />
              </Link>
            </div>
            <div className='fr dn db-l flex-column flex-auto-ns mv-auto'>
              {this.links.map(({ key, href, label }) => (
                <div key={key} className='db center w-auto fr ph2'>
                  <Link href={href}>
                    <a className='nav-item tf-dark-gray no-underline black pa3'>{label}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div className='fr dn db-l tf-yellow mv-auto ml4'>
              {this.buttons.map(({ key, href, label }) => (
                <div key={key} className='db center w-auto fr ph2'>
                  <Link href={href} key={key}>
                    <a className='btn-alt no-underline black pv3 ph4 br3'>{label}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div className='fr dn-l db'>
              <div className='pa3 f2-m' onClick={this.toggleDrawerOpen}>
                <Hamburger />
              </div>
            </div>
          </div>
        </div>
        {this.state.drawerOpen && <div className='w-100 h-100 bg-tf-dark-gray o-90 absolute white tf-lato tc pv4 pl5-ns pr5-ns'>
          <div className='fr pa2 pr3 mr1 pt2-m pr2-m mr1-m mt1-m' onClick={this.toggleDrawerOpen}>
            <X />
          </div>
          <div className='flex-column flex justify-around h5 mt6 pt4 f3'>
            <a href='/mission' className='white no-underline mv4 w5 center'>Our Mission</a>
            <a href='/donate' className='btn-menu no-underline pv3 br3 mv4 w4 w5-m center'>Donate</a>
          </div>
        </div>}

      </nav>
    )
  }
}

export default Nav
