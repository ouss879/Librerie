const Product = require('../models/Product') ;

const mongoose = require('mongoose') ;




mongoose.connect('mongodb://localhost/dbShopping' ,{useNewUrlParser : true} ,(error)=>{
  if(error){
    console.log(error)
  }else{
    console.log('Connecting to DB .....')
  }
})


const products = [ 
     new Product({

    imagePath: '/images/My Fucking Boss.jpg' ,
    title: 'My Fucking Boss' ,
    author: 'Orlane Peggy',
    genre: 'New Adult' ,
    cadre:'nouveau',
    description:' Raphael Lockwood est un enfoiré hautain, méprisant et aussi désagréable que séduisant. C’est aussi le nouveau...',
    collectionbook: 'Collection &H' ,
    pages: '412 pages',
    datePublished: 5-5-2021,
    isbn: 'EAN 9782280460088 ',
    voters: 4,
    price: 16
}),


new Product({

    imagePath: '/images/Embrassons-nous sous les étoiles.jpg' ,
    title: 'Embrassons-nous sous les étoiles' ,
    author: 'Sarah Morgan',
    genre: 'Romance contemporaine' ,
    cadre:'nouveau',
    description:'L’homme idéal, Flora l’a trouvé en Jack. Dès le moment où il a pénétré dans son magasin de fleurs, cet homme attentionné et diablement séduisant n’a plus jamais quitté ses pensées, ni son cœur. Seulement, Flora s’aperçoit bien...',
    collectionbook: 'Collection &H' ,
    pages: '464 pages',
    datePublished: 5-5-2021,
    isbn: 'EAN 9782280459563 ',
    voters: 1,
    price: 17
}),

new Product({

    imagePath: '/images/you and me.jpg' ,
    title: 'You and Me' ,
    author: 'Lucie Mariotti',
    genre: 'Développement personnel ' ,
    cadre:'',
    description:'En couple, vous cherchez à renforcer votre lien  ?Célibataire, vous souhaitez préparer votre avenir amoureux  ? Ce guide est fait pour vous  !',
    collectionbook: 'Collection &H' ,
    pages: '240 pages',
    datePublished: 5-5-2021,
    isbn: 'EAN 9782280459563 ',
    voters: 1,
    price: 17
}),

new Product({

    imagePath: '/images/Notre petit jeu dangereux.jpg' ,
    title: 'Notre petit jeu dangereux' ,
    author: 'Emily Blaine',
    genre: 'Romance contemporaine ' ,
    cadre:'',
    description:'Ils n’ont pas le droit de s’aimer… mais l’amour adore surmonter les obstacles. ',
    collectionbook: 'Collection &H' ,
    pages: '141 pages',
    datePublished: 9-6-2021,
    isbn: 'EAN 9782280459563 ',
    voters: 1,
    price: 11
}),
new Product({

    imagePath: '/images/I Hate You More.jpg' ,
    title: 'I Hate You More' ,
    author: 'Elizabeth O\'Roark',
    genre: 'New Adult' ,
    cadre:'nouveau',
    description:'C’est le pire scénario qu’Erin pouvait imaginer. Brendan, son ancien collègue si détestable, ce séducteur sans attaches qui attire toutes les filles dans son lit, est revenu s’installer en ville. Et pas n’importe où : Brendan loge chez elle. Enfin, chez elle et Rob, son fiancé, qui est à l’origine de cette invitation aussi stupide que dangereuse. Comment Brendan a-t-il pu accepter ? Même si Rob est son ami, il sait très bien ce qu’elle pense de lui. Et, bien qu’elle soit désormais sur le point de se marier, la présence de Brendan, sa voix et son regard provocant suscitent toujours en elle la même tempête d’émotions : exaspération, colère… ainsi qu’un sentiment plus trouble. Alors, quand Rob lui annonce qu’il va devoir partir un mois à l’étranger et la laisser seule avec ce colocataire indésirable, Erin redoute le pire. ',
    collectionbook: 'Collection &H' ,
    pages: '468 pages',
    datePublished: 2-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Tu n\'auras pas le dernier mot !.jpg',
    title: 'Tu n\'auras pas le dernier mot !' ,
    author: 'Aëla Liper',
    genre: 'Comédie romantique' ,
    cadre:'',
    description:'En ce moment, la vie de Loeiza est aussi palpitante qu’un fondant au chocolat sans chocolat. Son projet le plus excitant cette semaine ? Commencer le tome 2 de sa saga préférée, qu’elle a enfin pu emprunter à la médiathèque, et retrouver l’héroïne badass qui (elle au moins !) ne vit pas son existence par procuration. Mais, entre les pages du livre, elle découvre un petit mot à son attention signé de la main d’un inconnu. Le mystérieux correspondant a trouvé sa liste des « choses à faire avant 35 ans », qu’elle avait oubliée dans le tome 1 (voilà où elle l’avait mise !), et semble vouloir l’aider à les réaliser. L’occasion rêvée pour Loeiza de pimenter un peu son quotidien, avec un tout nouvel objectif en tête : découvrir l’identité de cet homme mystère…',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Madame chieuse et Monsieur rabat-joie.jpg',
    title: 'Madame chieuse et Monsieur rabat-joie' ,
    author: 'Kristen Rivers',
    genre: 'Comédie romantique' ,
    cadre:'',
    description:'En ce moment, la vie de Loeiza Gabrielle l’avait pressenti : ce voyage au Bhoutan était une très mauvaise idée. Si elle a accepté d’y passer ses vacances, c’est uniquement pour faire plaisir à sa meilleure amie. Sauf que la meilleure amie en question s’est retrouvée immobilisée dès leur arrivée à cause d’une mauvaise chute et a jugé bon de lui coller un guide dans les pattes pour qu’elle « profite » de la suite du séjour. Et pas n’importe quel guide : Tashi est du genre tellement flippé qu’il ne la lâche pas d’une semelle et lui interdit de sortir seule. Pire, il s’est mis en tête de l’initier – elle, la control freak par excellence – à la philosophie zen de son pays natal ! Il veut se prendre pour son guide spirituel ? OK, mais elle a bien l’intention d’être la pire des élèves. Et ce n’est pas son petit sourire craquant de baroudeur. aussi palpitante qu’un fondant au chocolat sans chocolat. Son projet le plus excitant cette semaine ? Commencer le tome 2 de sa saga préférée, qu’elle a enfin pu emprunter à la médiathèque, et retrouver l’héroïne badass qui (elle au moins !) ne vit pas son existence par procuration. Mais, entre les pages du livre, elle découvre un petit mot à son attention signé de la main d’un inconnu. Le mystérieux correspondant a trouvé sa liste des « choses à faire avant 35 ans », qu’elle avait oubliée dans le tome 1 (voilà où elle l’avait mise !), et semble vouloir l’aider à les réaliser. L’occasion rêvée pour Loeiza de pimenter un peu son quotidien, avec un tout nouvel objectif en tête : découvrir l’identité de cet homme mystère…',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Everytime We Touch.jpg',
    title: 'Everytime We Touch' ,
    author: 'Allie Krown',
    genre: 'New Adult' ,
    cadre:'',
    description:'En ce moment, la vie de Le cœur de Savannah est sur le point d’exploser. Deux ans qu’elle redoute ce moment, qu’elle repousse la possibilité de se retrouver face à Luis, le frère – sublime – de son fiancé. Elle a beau avoir essayé de l’oublier, rien n’y fait. Depuis ce baiser qu’ils ont échangé en secret, il ne quitte plus son esprit. Et, aujourd’hui encore, ses pires craintes se confirment. Pourquoi faut-il que son traître de corps s’embrase dès qu’elle pose les yeux sur son torse musclé ? Luis lui est interdit, l’a toujours été. Si Savannah ne veut pas que son petit ami se doute de quelque chose, elle va devoir mettre un terme à tout ça, en restant loin, très loin, de Luis. Même s’il semble prendre un malin plaisir à lui compliquer la tâche… Gabrielle l’avait pressenti : ce voyage au Bhoutan était une très mauvaise idée. Si elle a accepté d’y passer ses vacances, c’est uniquement pour faire plaisir à sa meilleure amie. Sauf que la meilleure amie en question s’est retrouvée immobilisée dès leur arrivée à cause d’une mauvaise chute et a jugé bon de lui coller un guide dans les pattes pour qu’elle « profite » de la suite du séjour. Et pas n’importe quel guide : Tashi est du genre tellement flippé qu’il ne la lâche pas d’une semelle et lui interdit de sortir seule. Pire, il s’est mis en tête de l’initier – elle, la control freak par excellence – à la philosophie zen de son pays natal ! Il veut se prendre pour son guide spirituel ? OK, mais elle a bien l’intention d’être la pire des élèves. Et ce n’est pas son petit sourire craquant de baroudeur. aussi palpitante qu’un fondant au chocolat sans chocolat. Son projet le plus excitant cette semaine ? Commencer le tome 2 de sa saga préférée, qu’elle a enfin pu emprunter à la médiathèque, et retrouver l’héroïne badass qui (elle au moins !) ne vit pas son existence par procuration. Mais, entre les pages du livre, elle découvre un petit mot à son attention signé de la main d’un inconnu. Le mystérieux correspondant a trouvé sa liste des « choses à faire avant 35 ans », qu’elle avait oubliée dans le tome 1 (voilà où elle l’avait mise !), et semble vouloir l’aider à les réaliser. L’occasion rêvée pour Loeiza de pimenter un peu son quotidien, avec un tout nouvel objectif en tête : découvrir l’identité de cet homme mystère…',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Everytime We Touch.jpg',
    title: 'Everytime We Touch' ,
    author: 'Allie Krown',
    genre: 'New Adult' ,
    cadre:'',
    description:'En ce moment, la vie de Le cœur de Savannah est sur le point d’exploser. Deux ans qu’elle redoute ce moment, qu’elle repousse la possibilité de se retrouver face à Luis, le frère – sublime – de son fiancé. Elle a beau avoir essayé de l’oublier, rien n’y fait. Depuis ce baiser qu’ils ont échangé en secret, il ne quitte plus son esprit. Et, aujourd’hui encore, ses pires craintes se confirment. Pourquoi faut-il que son traître de corps s’embrase dès qu’elle pose les yeux sur son torse musclé ? Luis lui est interdit, l’a toujours été. Si Savannah ne veut pas que son petit ami se doute de quelque chose, elle va devoir mettre un terme à tout ça, en restant loin, très loin, de Luis. Même s’il semble prendre un malin plaisir à lui compliquer la tâche… Gabrielle l’avait pressenti : ce voyage au Bhoutan était une très mauvaise idée. Si elle a accepté d’y passer ses vacances, c’est uniquement pour faire plaisir à sa meilleure amie. Sauf que la meilleure amie en question s’est retrouvée immobilisée dès leur arrivée à cause d’une mauvaise chute et a jugé bon de lui coller un guide dans les pattes pour qu’elle « profite » de la suite du séjour. Et pas n’importe quel guide : Tashi est du genre tellement flippé qu’il ne la lâche pas d’une semelle et lui interdit de sortir seule. Pire, il s’est mis en tête de l’initier – elle, la control freak par excellence – à la philosophie zen de son pays natal ! Il veut se prendre pour son guide spirituel ? OK, mais elle a bien l’intention d’être la pire des élèves. Et ce n’est pas son petit sourire craquant de baroudeur. aussi palpitante qu’un fondant au chocolat sans chocolat. Son projet le plus excitant cette semaine ? Commencer le tome 2 de sa saga préférée, qu’elle a enfin pu emprunter à la médiathèque, et retrouver l’héroïne badass qui (elle au moins !) ne vit pas son existence par procuration. Mais, entre les pages du livre, elle découvre un petit mot à son attention signé de la main d’un inconnu. Le mystérieux correspondant a trouvé sa liste des « choses à faire avant 35 ans », qu’elle avait oubliée dans le tome 1 (voilà où elle l’avait mise !), et semble vouloir l’aider à les réaliser. L’occasion rêvée pour Loeiza de pimenter un peu son quotidien, avec un tout nouvel objectif en tête : découvrir l’identité de cet homme mystère…',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),

new Product({

    imagePath: '/images/LOVE ! Aimez-vous pour aimer mieux.jpg',
    title: 'LOVE ! Aimez-vous pour aimer mieux' ,
    author: 'Lucie Mariotti',
    genre: 'Récits & témoignages' ,
    cadre:'',
    description:'La pièce "en couple" a été égarée lors de votre conception ? Votre vie sentimentale est une série en dix-huit saisons ? Pas de panique, tout est encore possible !',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Pour Devenir qui je suis !.jpg',
    title: 'Pour Devenir qui je suis !' ,
    author: 'Sam Zirah',
    genre: 'Récits & témoignages' ,
    cadre:'',
    description:'Sur Youtube, vous me connaissez souriant, détendu et de bonne humeur.Dans la vraie vie, je suis angoissé, boulimique du travail et en proie à des démons intérieurs.Depuis le lancement de ma chaîne, j’ai toujours veillé à montrer de moi une image lissée. Contrôlée. Maîtrisée. De la même façon, je ne vous ai dévoilé qu’une facette du monde de la téléréalité : celle qui fait rêver, qui ne dérange personne… mais qui entretient des illusions. Parce que je croyais que c’était mon rôle, je vous ai caché l’essentiel. Plus grave encore, je me suis menti à moi-même.Aujourd’hui, j’ai le courage de briser le silence. De tout vous révéler : sur moi, sur l’industrie de la télé-réalité, sur le business des influenceurs.Pour Devenir enfin qui je suis.',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Ed Sheeran.jpg',
    title: 'Ed Sheeran' ,
    author: 'Sean Smith',
    genre: 'Récits & témoignages' ,
    cadre:'',
    description:'Ed Sheeran a décidé de devenir chanteur-auteur-compositeur à l’âge de treize ans, alors qu’il jouait de la guitare dans un groupe de rock de son collège. À l’époque, il savait à peine chanter et n’avait jamais écrit de chanson. Un an plus tard, il avait enregistré son tout premier album, seul dans sa chambre.Comment cet adolescent autrefois timide et bègue est-il devenu le phénomène mondial et le showman que l’on connaît aujourd’hui ? À travers ses recherches et ses interviews, Sean Smith, spécialiste des stars de la chanson, retrace l’histoire d’Ed et de ses parents dévoués qui ont toujours encouragé et soutenu leur fils. De ses premiers concerts dans la rue à sa rencontre avec Taylor Swift – qui a tout changé – en passant par la société de gestion d’Elton John et le contrat.',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Le rêve d\'une vie.jpg',
    title: 'Le rêve d\'une vie' ,
    author: 'Elsa Esnoult',
    genre: 'Récits & témoignages' ,
    cadre:'',
    description:'Depuis toute petite, mon rêve a toujours été de consacrer ma vie à mes deux passions : la musique et la comédie.Grâce à vous, ce rêve est devenu une réalité.Vous êtes toujours plus nombreux à m’écrire et m’ouvrir les portes de votre cœur. Aujourd’hui, c’est à mon tour de vous ouvrir le mien et de vous faire entrer dans mon monde. À travers ce livre, vous découvrirez mon histoire, mes passions, ma vie au quotidien, mais aussi ceux qui m’accompagnent et mes envies pour l’avenir. Un avenir que je n’imagine pas sans vous…',
    collectionbook: 'Collection &H' ,
    pages: '208 pages',
    datePublished: 12-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 17
}),
new Product({

    imagePath: '/images/Des noces à l\'écossaise.jpg' ,
    title: 'Des noces à l\'écossaise' ,
    author: 'Laura Black',
    genre: 'Romance historique' ,
    cadre:'nouveau',
    description:'Pour sauver son père et sa tante de la misère, Prudence est prête à tout. Tout, y compris quitter sa paisible vie de recluse pour lier son destin à celui de Zane Mac Fergall, richissime séducteur écossais, qui semble lui aussi contraint à cette alliance pour régler les dettes de jeu de son lord de père. Un homme qui, sous ses dehors taciturnes, se sacrifie lui aussi pour les siens. Et qu’il devient dès lors plus difficile de tromper de la plus malhonnête des façons…',
    collectionbook: 'Collection Victoria' ,
    pages: '468 pages',
    datePublished: 1-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 3,
    price: 8
}),
new Product({

    imagePath: '/images/Un baron à son bras.jpg' ,
    title: 'Un baron à son bras' ,
    author: 'Kasey Michaels',
    genre: 'Romance historique' ,
    cadre:'nouveau',
    description:'Je vous ai trouvé une épouse. Devant le regard insistant du régent, Justin Wilde sait qu’il ne peut refuser. Pourtant, après un mariage désastreux avec une femme volage, il s’était juré de ne plus retomber dans ce piège. Mais, s’il veut enterrer pour de bon la fâcheuse affaire de duel qui l’a contraint à l’exil pendant des années, Justin sait qu’il doit accepter. D’ailleurs, cette Lady Magdaléna qu’on lui donne pour fiancée n’a rien de la mondaine capricieuse qu’il pouvait redouter : avec son visage d’ange et son teint d’albâtre, cette pupille du roi d’Autriche surpasse en beauté toutes les femmes qu’il a pu côtoyer… au point que cela en devienne suspect. ',
    collectionbook: 'Collection Victoria' ,
    pages: '468 pages',
    datePublished: 1-6-2021,
    isbn: 'EAN 9782280458245',
    voters: 1,
    price: 8
}),

new Product({

    imagePath: '/images/Dette à un Sicilien.jpg' ,
    title: 'Dette à un Sicilien' ,
    author: 'Jane Porter',
    genre: 'Sentimental' ,
    cadre:'top-vente',
    description:'Tu as une dette envers moi. » Les mots de Marcu Uberto causent un choc à Monet. Si cet homme l’a bien aidée à fuir Palerme huit ans plus tôt, elle n’imaginait pas le revoir après tout ce temps et encore moins qu’il lui réclamerait ainsi son dû ! Toutefois, Monet n’a qu’une parole et se résout donc à aider Marcu comme il l’exige… en jouant le rôle de nounou auprès de ses enfants. Sitôt de retour dans le château du beau Sicilien, Monet sent l’inquiétude la gagner. Non seulement elle n’appartient pas au même monde que Marcu, mais elle ressent pour lui les mêmes sentiments interdits qu’autrefois',
    collectionbook: 'Collection Azur' ,
    pages: '160 pages',
    datePublished: 1-1-2021,
    isbn: 'EAN 9782280458245',
    voters: 15,
    price: 18
}),
new Product({

    imagePath: '/images/Le fruit d\'une noce.jpg' ,
    title: 'Le fruit d\'une noce' ,
    author: 'Ellie Darkins',
    genre: 'Sentimental' ,
    cadre:'top-vente',
    description:'Un mariage, la rencontre de deux inconnus… L’histoire d’Elspeth et de Fraser aurait dû prendre fin sitôt la noce de leurs amis achevée. Mais d’un baiser langoureux à une nuit passionnée il n’y a qu’un pas de danse que tous deux franchissent avec plaisir –  sans savoir que cette parenthèse éphémère va les lier à jamais… Quand elle se découvre enceinte, Elspeth n’a en effet d’autre choix que de renouer avec Fraser, même s’il ne lui a jamais rien promis d’autre qu’une liaison sans lendemain. ',
    collectionbook: 'Collection Azur' ,
    pages: '160 pages',
    datePublished: 1-1-2021,
    isbn: 'EAN 9782280458245',
    voters: 7,
    price: 12
}),
new Product({

    imagePath: '/images/Marié à une inconnue.jpg' ,
    title: 'Marié à une inconnue' ,
    author: 'Abby Green',
    genre: 'Sentimental' ,
    cadre:'top-vente',
    description:'Elle ne reconnaît pas son époux, mais elle exulte à son contact… Après un grave accident, Sasha se réveille amnésique. Comment a-t-elle pu oublier s’être mariée avec Apollo Vasilis, le sublime Grec à son chevet  ? Si elle est d’abord incapable de se souvenir du jour où il l’a conduite à l’autel, des bribes d’une nuit passée avec Apollo lui reviennent bientôt avec fracas. Une réminiscence qui éveille en elle un brusque désir… Quel est ce secret qui plane entre eux  ? À mesure que Sasha redécouvre son mari, la vérité s’impose à elle, sombre et envoûtante… ',
    collectionbook: 'Collection Azur' ,
    pages: '160 pages',
    datePublished: 1-1-2021,
    isbn: 'EAN 9782280458245',
    voters: 11,
    price: 12
}),
new Product({

    imagePath: '/images/La reine et le sulfureux play-boy.jpg' ,
    title: 'La reine et le sulfureux play-boy' ,
    author: 'Maisey Yates',
    genre: 'Sentimental' ,
    cadre:'top-vente',
    description:'Ce soir, dans ce club privé où elle s’est rendue incognito, elle n’est plus la reine Astrid de Bjornland mais une femme en quête d’un homme. Un homme qui lui donnera un héritier. Son choix, elle l’a déjà fait : il s’agit de Mauro Bianchi. Le propriétaire des lieux, connu pour ses frasques et péchés, est viril, envoûtant, dangereux – et à l’opposé des aristocrates qu’elle côtoie au palais. Avec lui, elle partagera une nuit, une seule. Sans lui révéler ses intentions ou son identité. Et, si le destin le permet, elle en emportera un souvenir inoubliable… ',
    collectionbook: 'Collection Azur' ,
    pages: '160 pages',
    datePublished: 1-1-2021,
    isbn: 'EAN 9782280458245',
    voters: 26,
    price: 15
}),
] 

var done = 0 ;

for( var i = 0 ; i < products.length ; i++){
    products[i].save((error , doc)=>{
        if(error){
            console.log(error)
        }
        console.log(doc)
        done ++
        if(done === products.length) { 
            mongoose.disconnect();
        }
    })
}