import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-nachnem-докум-поставки-l');
  this.route('i-i-s-nachnem-докум-поставки-e',
  { path: 'i-i-s-nachnem-докум-поставки-e/:id' });
  this.route('i-i-s-nachnem-докум-поставки-e.new',
  { path: 'i-i-s-nachnem-докум-поставки-e/new' });
  this.route('i-i-s-nachnem-клиенты-l');
  this.route('i-i-s-nachnem-клиенты-e',
  { path: 'i-i-s-nachnem-клиенты-e/:id' });
  this.route('i-i-s-nachnem-клиенты-e.new',
  { path: 'i-i-s-nachnem-клиенты-e/new' });
  this.route('i-i-s-nachnem-организация-l');
  this.route('i-i-s-nachnem-организация-e',
  { path: 'i-i-s-nachnem-организация-e/:id' });
  this.route('i-i-s-nachnem-организация-e.new',
  { path: 'i-i-s-nachnem-организация-e/new' });
  this.route('i-i-s-nachnem-пункт-погрузки-l');
  this.route('i-i-s-nachnem-пункт-погрузки-e',
  { path: 'i-i-s-nachnem-пункт-погрузки-e/:id' });
  this.route('i-i-s-nachnem-пункт-погрузки-e.new',
  { path: 'i-i-s-nachnem-пункт-погрузки-e/new' });
  this.route('i-i-s-nachnem-сотрудники-l');
  this.route('i-i-s-nachnem-сотрудники-e',
  { path: 'i-i-s-nachnem-сотрудники-e/:id' });
  this.route('i-i-s-nachnem-сотрудники-e.new',
  { path: 'i-i-s-nachnem-сотрудники-e/new' });
  this.route('i-i-s-nachnem-список-барж-l');
  this.route('i-i-s-nachnem-список-барж-e',
  { path: 'i-i-s-nachnem-список-барж-e/:id' });
  this.route('i-i-s-nachnem-список-барж-e.new',
  { path: 'i-i-s-nachnem-список-барж-e/new' });
  this.route('i-i-s-nachnem-список-контей-l');
  this.route('i-i-s-nachnem-список-контей-e',
  { path: 'i-i-s-nachnem-список-контей-e/:id' });
  this.route('i-i-s-nachnem-список-контей-e.new',
  { path: 'i-i-s-nachnem-список-контей-e/new' });
  this.route('i-i-s-nachnem-товары-l');
  this.route('i-i-s-nachnem-товары-e',
  { path: 'i-i-s-nachnem-товары-e/:id' });
  this.route('i-i-s-nachnem-товары-e.new',
  { path: 'i-i-s-nachnem-товары-e/new' });
  this.route('i-i-s-nachnem-формир-док-распр-l');
  this.route('i-i-s-nachnem-формир-док-распр-e',
  { path: 'i-i-s-nachnem-формир-док-распр-e/:id' });
  this.route('i-i-s-nachnem-формир-док-распр-e.new',
  { path: 'i-i-s-nachnem-формир-док-распр-e/new' });
  this.route('i-i-s-nachnem-формир-рез-пос-l');
  this.route('i-i-s-nachnem-формир-рез-пос-e',
  { path: 'i-i-s-nachnem-формир-рез-пос-e/:id' });
  this.route('i-i-s-nachnem-формир-рез-пос-e.new',
  { path: 'i-i-s-nachnem-формир-рез-пос-e/new' });
});

export default Router;
