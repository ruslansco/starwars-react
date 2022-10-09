export interface AllArticleType {
    /*
      id: number,
      content: object,
      created_at: string,
      published: boolean,
      */
     id: number,
     image: string,
     date: Date,
     link: string,
     country: string,
     title: string,
     published: string,
     time: string,
     timestamp: Date,
     source: string,
    }
    
  
  export interface UkraineArticleType {
  
     id: number,
     image: string,
     date: Date,
     link: string,
     country: string,
     title: string,
     published: string,
     time: string,
     timestamp: Date,
     source: string,
    }
    
    
    export interface RussiaArticleType {
  
      id: number,
      image: string,
      date: Date,
      link: string,
      country: string,
      title: string,
      published: string,
      time: string,
      timestamp: Date,
      source: string,
     }
    
     export interface WorldArticleType {
  
      id: number,
      image: string,
      date: Date,
      link: string,
      country: string,
      title: string,
      published: string,
      time: string,
      timestamp: Date,
      source: string,
      text: string
     }
  
  
  export interface ArticlesType {
    /*
      id: number,
      content: object,
      created_at: string,
      published: boolean,
      */
     id: number,
     image: string,
     date: Date,
     link: string,
     country: string,
     title: string,
     published: string,
     time: string,
     timestamp: Date,
     source: string
    }
    
    export interface ArticleType {
      /*
        id: number,
        content: object,
        created_at: string,
        published: boolean,
        */
       id: number,
       image: string,
       date: Date,
       link: string,
       country: string,
       title: string,
       published: string,
       time: string,
       timestamp: Date,
       source: string,
      }
  
    export interface ContentType {
      /*
        id: number,
        content: object,
        created_at: string,
        published: boolean,
        */
       image: string,
       title: string,
       source: string,
      }
      