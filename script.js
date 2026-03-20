const booksByGenre = {
  fantasy: {
    kids: [
      {
        title: "Harry Potter und der Stein der Weisen",
        author: "J. K. Rowling",
        reason: "Magisch, spannend und ein perfekter Einstieg in Fantasy-Welten.",
      },
      {
        title: "Die unendliche Geschichte",
        author: "Michael Ende",
        reason: "Klassiker mit viel Fantasie und Abenteuer.",
      },
      {
        title: "Percy Jackson - Diebe im Olymp",
        author: "Rick Riordan",
        reason: "Schneller Stil, Humor und mythologische Action.",
      },
    ],
    teen: [
      {
        title: "Eragon - Das Vermachtnis der Drachenreiter",
        author: "Christopher Paolini",
        reason: "Coming-of-Age trifft auf Drachen und epische Welt.",
      },
      {
        title: "Tintenherz",
        author: "Cornelia Funke",
        reason: "Buecher-Magie, Abenteuer und starke Charaktere fuer Teen-Leser.",
      },
      {
        title: "Skulduggery Pleasant - Der Gentleman mit der Feuerhand",
        author: "Derek Landy",
        reason: "Rasanter Urban-Fantasy-Mix aus Humor, Mystery und Action.",
      },
    ],
    adult: [
      {
        title: "Der Name des Windes",
        author: "Patrick Rothfuss",
        reason: "Atmosphaerisch, sprachstark und detailreiche Welt.",
      },
      {
        title: "Der Herr der Ringe - Die Gefaehrten",
        author: "J. R. R. Tolkien",
        reason: "Zeitlose High-Fantasy mit grossem Epos-Gefuehl.",
      },
      {
        title: "Die Priorin des Orangenbaums",
        author: "Samantha Shannon",
        reason: "Moderne epische Fantasy mit vielen Perspektiven.",
      },
    ],
  },
  "sci-fi": {
    kids: [
      {
        title: "Spaceboy",
        author: "David Walliams",
        reason: "Leichte Sci-Fi fuer juengere Leserinnen und Leser.",
      },
      {
        title: "Der kleine Major Tom - Veroffentlichung auf dem Mars",
        author: "Bernd Flessner",
        reason: "Spielerischer Einstieg in Weltraumthemen.",
      },
      {
        title: "Ein Stern namens Mama",
        author: "Karen-Susan Fessel",
        reason: "Emotionale Geschichte mit Sci-Fi-Elementen.",
      },
    ],
    teen: [
      {
        title: "Ready Player One",
        author: "Ernest Cline",
        reason: "Popkultur, Virtual Reality und viel Spannung.",
      },
      {
        title: "Illuminae",
        author: "Amie Kaufman, Jay Kristoff",
        reason: "Ungewoehnliches Format und rasanter Sci-Fi-Plot.",
      },
      {
        title: "Scythe - Die Hueter des Todes",
        author: "Neal Shusterman",
        reason: "Dystopie mit starken ethischen Fragen.",
      },
    ],
    adult: [
      {
        title: "Der Marsianer",
        author: "Andy Weir",
        reason: "Humorvoll und technisch glaubwuerdige Science-Fiction.",
      },
      {
        title: "Dune - Der Wuestenplanet",
        author: "Frank Herbert",
        reason: "Grosses Sci-Fi-Epos mit Politik und Oekologie.",
      },
      {
        title: "Leviathan erwacht",
        author: "James S. A. Corey",
        reason: "Mix aus Space Opera, Mystery und Thriller.",
      },
    ],
  },
  krimi: {
    kids: [
      {
        title: "Die drei ??? - Das Gespensterschloss",
        author: "Robert Arthur",
        reason: "Klassischer Einstieg in spannende Detektivfaelle.",
      },
      {
        title: "TKKG - Der blinde Hellseher",
        author: "Stefan Wolf",
        reason: "Kurzweilige Faelle fuer junge Krimifans.",
      },
      {
        title: "Emil und die Detektive",
        author: "Erich Kaestner",
        reason: "Zeitloser Jugendkrimi mit Charme.",
      },
    ],
    teen: [
      {
        title: "One of Us Is Lying",
        author: "Karen M. McManus",
        reason: "Schulsetting mit vielen Twists.",
      },
      {
        title: "A Good Girl's Guide to Murder",
        author: "Holly Jackson",
        reason: "Moderner Jugendkrimi mit True-Crime-Vibe.",
      },
      {
        title: "Erebos",
        author: "Ursula Poznanski",
        reason: "Spannung zwischen Thriller und Digitalwelt.",
      },
    ],
    adult: [
      {
        title: "Der Knochenjaeger",
        author: "Jeffery Deaver",
        reason: "Packender Thriller mit intelligenten Wendungen.",
      },
      {
        title: "Verblendung",
        author: "Stieg Larsson",
        reason: "Dunkler, komplexer Krimi mit starker Dynamik.",
      },
      {
        title: "Der Donnerstagsmordclub",
        author: "Richard Osman",
        reason: "Cleverer Krimi mit Humor und Herz.",
      },
    ],
  },
  romance: {
    kids: [
      {
        title: "Mein Lotta-Leben - Alles voller Kaninchen",
        author: "Alice Pantermueller",
        reason: "Leichte, lustige Geschichten ueber Freundschaft und Gefuehle.",
      },
      {
        title: "Alea Aquarius - Der Ruf des Wassers",
        author: "Tanya Stewner",
        reason: "Abenteuer mit feinen romantischen Untertoenen.",
      },
      {
        title: "Die Schule der magischen Tiere",
        author: "Margit Auer",
        reason: "Herzlich und altersgerecht mit viel Gefuehl.",
      },
    ],
    teen: [
      {
        title: "To All the Boys I've Loved Before",
        author: "Jenny Han",
        reason: "Suesse Teen-Romance mit Witz und Herz.",
      },
      {
        title: "Heartstopper Vol. 1",
        author: "Alice Oseman",
        reason: "Einfuehlsame und positive Liebesgeschichte.",
      },
      {
        title: "Ruby Red - Rubinrot",
        author: "Kerstin Gier",
        reason: "Zeitreise, Humor und Romantik in einem.",
      },
    ],
    adult: [
      {
        title: "Der Papierpalast",
        author: "Miranda Cowley Heller",
        reason: "Atmosphaerische Liebesgeschichte mit Tiefgang.",
      },
      {
        title: "Book Lovers",
        author: "Emily Henry",
        reason: "Charmante Romance mit Tempo und Dialogwitz.",
      },
      {
        title: "Ein ganzes halbes Jahr",
        author: "Jojo Moyes",
        reason: "Beruehrend und emotional mit starker Figurenzeichnung.",
      },
    ],
  },
  sachbuch: {
    kids: [
      {
        title: "WAS IST WAS - Planeten und Raumfahrt",
        author: "Manfred Baur",
        reason: "Spannendes Wissen kindgerecht aufbereitet.",
      },
      {
        title: "Das grosse Buch der Tierrekorde",
        author: "Nicola Davies",
        reason: "Lernen mit Staunen und starken Bildern.",
      },
      {
        title: "Wunderwelt Koerper",
        author: "Louie Stowell",
        reason: "Verstaendlich erklaert und visuell ansprechend.",
      },
    ],
    teen: [
      {
        title: "Factfulness",
        author: "Hans Rosling",
        reason: "Verstaendlicher Blick auf globale Zusammenhaenge.",
      },
      {
        title: "21 Lektionen fuer das 21. Jahrhundert",
        author: "Yuval Noah Harari",
        reason: "Regt zum Denken ueber Gegenwart und Zukunft an.",
      },
      {
        title: "Unsichtbare Frauen",
        author: "Caroline Criado Perez",
        reason: "Datengestuetzte Einblicke in alltaegliche Strukturen.",
      },
    ],
    adult: [
      {
        title: "Eine kurze Geschichte der Menschheit",
        author: "Yuval Noah Harari",
        reason: "Breiter Ueberblick ueber unsere Entwicklung.",
      },
      {
        title: "Schnelles Denken, langsames Denken",
        author: "Daniel Kahneman",
        reason: "Klassiker zu Entscheidungen und Denkfehlern.",
      },
      {
        title: "Die 1%-Methode",
        author: "James Clear",
        reason: "Praktisches Sachbuch fuer Gewohnheiten und Alltag.",
      },
    ],
  },
};

const form = document.getElementById("bookForm");
const recommendations = document.getElementById("recommendations");
const errorMessage = document.getElementById("error");
const nextRecommendationsButton = document.getElementById("nextRecommendations");
const resultsInfo = document.getElementById("resultsInfo");
const fallbackCover = "https://placehold.co/180x270/f3e4c6/13212b?text=Kein+Cover";
const easterEggSequence = ["N", "O", "S", "W"];
const secretExplorerBooks = [
  {
    title: "Der Wolkenatlas",
    author: "David Mitchell",
    reason: "Verschachtelte Reisen durch Zeit, Identitaet und Schicksal.",
  },
  {
    title: "Piranesi",
    author: "Susanna Clarke",
    reason: "Raetselhaft, poetisch und wie eine Entdeckung im Labyrinth.",
  },
  {
    title: "Die Stadt und die Stadt",
    author: "China Mieville",
    reason: "Ungewoehnlicher Mix aus Krimi, Idee und Weltbau.",
  },
];

let recommendationPool = [];
let currentOffset = 0;
let secretKeyBuffer = [];

function getAgeProfile(age) {
  if (age <= 10) {
    return {
      label: "6-10",
      sourceGroups: ["kids"],
      rotation: age % 3,
    };
  }

  if (age <= 14) {
    return {
      label: "11-14",
      sourceGroups: ["teen", "kids"],
      rotation: age % 3,
    };
  }

  if (age <= 20) {
    return {
      label: "15-20",
      sourceGroups: ["teen"],
      rotation: age % 3,
    };
  }

  if (age <= 25) {
    return {
      label: "21-25",
      sourceGroups: ["adult"],
      rotation: age % 3,
    };
  }

  if (age <= 35) {
    return {
      label: "26-35",
      sourceGroups: ["adult"],
      rotation: age % 3,
    };
  }

  if (age <= 49) {
    return {
      label: "36-49",
      sourceGroups: ["adult"],
      rotation: age % 3,
    };
  }

  if (age <= 64) {
    return {
      label: "50-64",
      sourceGroups: ["adult"],
      rotation: age % 3,
    };
  }

  return {
    label: "65+",
    sourceGroups: ["adult"],
    rotation: age % 3,
  };
}

function dedupeBooks(books) {
  return books.filter(
    (book, index, allBooks) =>
      index ===
      allBooks.findIndex(
        (candidate) => candidate.title === book.title && candidate.author === book.author
      )
  );
}

function rotateBooks(books, shift) {
  if (!books.length) {
    return books;
  }

  const safeShift = ((shift % books.length) + books.length) % books.length;
  if (safeShift === 0) {
    return books;
  }

  return [...books.slice(safeShift), ...books.slice(0, safeShift)];
}

function buildRecommendationPool(genre, ageProfile) {
  const pool = ageProfile.sourceGroups.flatMap((group) => booksByGenre[genre][group] || []);
  const uniquePool = dedupeBooks(pool);

  return rotateBooks(uniquePool, ageProfile.rotation);
}

function getBuyUrl(book) {
  const query = encodeURIComponent(`${book.title} ${book.author}`);
  return `https://www.thalia.de/suche?sq=${query}`;
}

async function fetchCoverUrl(book) {
  const params = new URLSearchParams({
    title: book.title,
    author: book.author,
    limit: "1",
  });

  try {
    const response = await fetch(`https://openlibrary.org/search.json?${params.toString()}`);

    if (!response.ok) {
      return fallbackCover;
    }

    const data = await response.json();
    const firstDoc = data.docs && data.docs[0];

    if (firstDoc && firstDoc.cover_i) {
      return `https://covers.openlibrary.org/b/id/${firstDoc.cover_i}-M.jpg`;
    }
  } catch {
    return fallbackCover;
  }

  return fallbackCover;
}

async function renderBooks(books) {
  recommendations.innerHTML = "";

  const booksWithMeta = await Promise.all(
    books.map(async (book) => ({
      ...book,
      coverUrl: await fetchCoverUrl(book),
      buyUrl: getBuyUrl(book),
    }))
  );

  booksWithMeta.forEach((book, index) => {
    const item = document.createElement("li");
    item.className = "book-item";
    item.style.animationDelay = `${index * 90}ms`;
    item.innerHTML = `
      <img class="book-cover" src="${book.coverUrl}" alt="Buchcover von ${book.title}" loading="lazy" />
      <div class="book-content">
        <div class="book-title">${book.title}</div>
        <div class="book-meta">von ${book.author}</div>
        <div class="book-meta">${book.reason}</div>
        <a class="buy-link" href="${book.buyUrl}" target="_blank" rel="noopener noreferrer">Buch kaufen</a>
      </div>
    `;
    recommendations.appendChild(item);
  });
}

async function renderNextBatch() {
  const batch = recommendationPool.slice(currentOffset, currentOffset + 3);

  if (batch.length === 0) {
    nextRecommendationsButton.hidden = true;
    resultsInfo.textContent =
      "Das waren alle Vorschlaege fuer dieses Genre. Waehl gern ein anderes aus und entdecke mehr.";
    return;
  }

  recommendations.innerHTML = "<li class=\"book-meta\">Wir laden deine Vorschlaege...</li>";
  await renderBooks(batch);
  currentOffset += 3;

  const hasMore = currentOffset < recommendationPool.length;
  nextRecommendationsButton.hidden = !hasMore;
  resultsInfo.textContent = hasMore
    ? "Noch nicht dein Vibe? Hol dir einfach die naechsten 3 Vorschlaege."
    : "Das waren alle Vorschlaege fuer dieses Genre.";
}

async function activateExplorerMode() {
  errorMessage.textContent = "";
  recommendationPool = [];
  currentOffset = 0;
  nextRecommendationsButton.hidden = true;
  recommendations.innerHTML = "<li class=\"book-meta\">Entdecker-Modus wird geladen...</li>";
  await renderBooks(secretExplorerBooks);
  resultsInfo.textContent = "Easter Egg gefunden: Entdecker-Modus (N-O-S-W) ist aktiv.";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorMessage.textContent = "";
  resultsInfo.textContent = "";
  nextRecommendationsButton.hidden = true;

  const formData = new FormData(form);
  const ageValue = Number(formData.get("age"));
  const genre = formData.get("genre");

  if (!Number.isInteger(ageValue) || ageValue < 6 || ageValue > 120) {
    errorMessage.textContent = "Bitte gib ein Alter zwischen 6 und 120 ein.";
    recommendations.innerHTML = "";
    return;
  }

  if (!genre || !booksByGenre[genre]) {
    errorMessage.textContent = "Waehle bitte ein Genre aus, damit wir passende Buecher finden.";
    recommendations.innerHTML = "";
    return;
  }

  const ageProfile = getAgeProfile(ageValue);
  const selectedBooks = buildRecommendationPool(genre, ageProfile);

  if (!selectedBooks || selectedBooks.length < 3) {
    errorMessage.textContent = "Dafuer haben wir gerade keine passenden Vorschlaege gefunden. Probier ein anderes Genre.";
    recommendations.innerHTML = "";
    return;
  }

  recommendationPool = selectedBooks;
  currentOffset = 0;
  await renderNextBatch();
  resultsInfo.textContent = `Altersprofil ${ageProfile.label} aktiv. Noch nicht dein Vibe? Hol dir einfach die naechsten 3 Vorschlaege.`;
});

nextRecommendationsButton.addEventListener("click", async () => {
  await renderNextBatch();
});

document.addEventListener("keydown", async (event) => {
  if (!event.key || event.key.length !== 1) {
    return;
  }

  const key = event.key.toUpperCase();
  if (!/[A-Z]/.test(key)) {
    return;
  }

  secretKeyBuffer.push(key);
  if (secretKeyBuffer.length > easterEggSequence.length) {
    secretKeyBuffer = secretKeyBuffer.slice(-easterEggSequence.length);
  }

  const isMatch = easterEggSequence.every((requiredKey, index) => {
    return secretKeyBuffer[index] === requiredKey;
  });

  if (isMatch) {
    secretKeyBuffer = [];
    await activateExplorerMode();
  }
});
