import {
  createElement,
  createHeader,
  createImage,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

// ===

const TABS = [
  {
    text: 'База знань',
    viewed: false,
  },
  {
    text: 'Інформація',
    viewed: true,
  },
]

const createTabs = () => {
  const tabList = createElement('div', 'tabs')

  TABS.forEach((tabsData) => {
    const tab = createElement(
      'button',
      tabsData.viewed
        ? 'tab tab__text active'
        : 'tab tab__text',
    )

    const tabText = createElement(
      'button',
      'tab__text',
      tabsData.text,
    )

    tab.append(tabText)

    tabList.append(tab)
  })
  return tabList
}

const tabs = createTabs()
page.append(tabs)

// ===

const POST_LIST = [
  {
    image: '/img/community.png',
    title: 'Що таке база знань?',
    info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте
	и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит
	информацию, являющуюся результатом решения предыдущих задач.`,
    button: 'Перейти до коммьюніті у Телеграм',
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      'post__community post--viewed',
    )

    // ===

    const postImage = createImage(
      'div',
      'post__header',
      postData.image,
    )

    // ===

    const postTitle = createElement(
      'h1',
      'title--2',
      postData.title,
    )

    // ===

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )

    const postButton = createElement(
      'button',
      'button button__community',
      postData.button,
    )
    post.append(
      postImage,
      postTitle,
      infoParagraph,
      postButton,
    )

    //===

    postList.append(post)
  })

  return postList
}

//===

const post = createPost()
page.append(post)
