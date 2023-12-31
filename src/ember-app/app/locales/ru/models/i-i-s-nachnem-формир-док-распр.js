export default {
  projections: {
    ФормирДокРаспрE: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокРаспр: {
        __caption__: 'Номер документа распределения'
      },
      докумПоставки: {
        __caption__: 'Номер документа поставки',
        клиенты: {
          __caption__: '',
          заказчик: {
            __caption__: 'Заказчик'
          },
          телефон: {
            __caption__: 'Телефон'
          },
          адресПоставки: {
            __caption__: 'Адрес поставки'
          }
        }
      },
      пунктПогрузки: {
        __caption__: 'Наименование пункта погрузки'
      },
      списокБарж: {
        __caption__: 'Номер баржи'
      },
      списокКонтей: {
        __caption__: 'Номер контейнера'
      }
    },
    ФормирДокРаспрL: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокРаспр: {
        __caption__: 'Номер документа распределения'
      },
      докумПоставки: {
        __caption__: 'Номер документа поставки',
        номерДокПост: {
          __caption__: 'Номер документа поставки'
        }
      },
      списокБарж: {
        __caption__: 'Номер баржи',
        номерБаржи: {
          __caption__: 'Номер баржи'
        }
      },
      пунктПогрузки: {
        __caption__: 'Адрес пункта поставки',
        адрес: {
          __caption__: 'Адрес пункта поставки'
        }
      },
      списокКонтей: {
        __caption__: 'Номер контейнера',
        номерКонтей: {
          __caption__: 'Номер контейнера'
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номерДокРаспр: {
      __caption__: 'Номер документа распределения'
    },
    докумПоставки: {
      __caption__: 'Номер документа поставки'
    },
    пунктПогрузки: {
      __caption__: 'Наименование пункта погрузки'
    },
    списокБарж: {
      __caption__: 'Номер баржи'
    },
    списокКонтей: {
      __caption__: 'Номер контейнера'
    }
  }
};
