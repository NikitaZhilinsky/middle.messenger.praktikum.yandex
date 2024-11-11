import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'login': [ Pages.Login ],
  'registration': [ Pages.Registration ],
  'chats': [ Pages.Chats, { chats: [{}, {}, {}, {}, {}, {}, {}]} ], // +chats
  'settings': [ Pages.Settings ],
  'error400': [ Pages.Error400 ],
  'error500': [ Pages.Error500 ],
  'navigate': [ Pages.Navigate ]
};

Object.entries(Components).forEach(([ name, template ]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  const temlpatingFunction = Handlebars.compile(source);

  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('navigate'));

document.addEventListener('click', e => {
//   @ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});