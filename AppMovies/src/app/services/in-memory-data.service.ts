//Dependencies
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const movies = [
    {id: 0, title: 'Terminator', year: 1996, duration: 90, synopsis: '' },
    {id: 1, title: 'Batman', year: 2008, duration: 100, synopsis: '' },
    {id: 2, title: 'Iron Man', year: 2009, duration: 80, synopsis: '' },
    {id: 3, title: 'Titanic', year: 1995, duration: 120, synopsis: '' },
    {id: 4, title: 'Superman', year: 2005, duration: 85, synopsis: '' },
    {id: 5, title: 'Thor', year: 2009, duration: 90, synopsis: '' },
    {id: 6, title: 'Capitan America', year: 2010, duration: 95, synopsis: '' },
  ];
  return{movies}
}
}
