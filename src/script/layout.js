export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

// ===

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header__avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })

  return header
}

// ===

const HEADER_IMAGE = [
  {
    width: 360,
    height: 140,
    src: '/img/community.png',
  },
]

export const createImage = () => {
  const image = createElement(
    'div',
    'post__community post--viewed',
  )

  HEADER_IMAGE.forEach((params) => {
    const header__img = createElement('div', 'post__header')
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    header__img.append(img)

    image.append(header__img)
  })

  return image
}
