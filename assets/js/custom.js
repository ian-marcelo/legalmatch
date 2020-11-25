var reviews = new Vue({
  el: '#reviews',
  data: {
    showModal: false,
    reviews: [
      { 
        profilepic: 'assets/img/mitchell.png', 
        name: 'Mitchell M.', 
        state: 'Cherry Hill, NJ', 
        company: 'Family Law', 
        rating: 5, 
        quote: 'This lawyer exceeded my expectations. I found attourney Mullen to be very reliable, courteous prompt',
        Users: 40,
        Overall: 5,
        Responded_in_a_timely_manner: 4,
        Answered_questions_clearly: 5,
        Understood_needs: 4,
        Gave_complete_and_clear_information: 5,
        Knowledgeable_in_legal_area: 5,
        Good_value_for_money: 5,
        Would_hire_again: 4,
        Would_recommend_to_friend: 5 
      },
      { 
        profilepic: 'assets/img/joel.png', 
        name: 'Joel C.', 
        state: 'Little Rock, AK', 
        company: 'Job & Employment Law', 
        rating: 5,
        quote: 'He is the kind of lawyer who would sit down and explain things on how things work in legal matter bu he is', 
        Users: 40,
        Overall: 5,
        Responded_in_a_timely_manner: 4,
        Answered_questions_clearly: 5,
        Understood_needs: 4,
        Gave_complete_and_clear_information: 5,
        Knowledgeable_in_legal_area: 5,
        Good_value_for_money: 5,
        Would_hire_again: 4,
        Would_recommend_to_friend: 5 
      },
      { 
        profilepic: 'assets/img/brigida.png', 
        name: 'Brigida R.', 
        state: 'Dallas TX', 
        company: 'Family Law', 
        rating: 5, 
        quote: 'My initial feeling speaking with Brigida was of relief, because I knew she was the right lawy', 
        Users: 29,
        Overall: 5,
        Responded_in_a_timely_manner: 4,
        Answered_questions_clearly: 5,
        Understood_needs: 4,
        Gave_complete_and_clear_information: 5,
        Knowledgeable_in_legal_area: 5,
        Good_value_for_money: 5,
        Would_hire_again: 4,
        Would_recommend_to_friend: 5 
      }
    ]
  },
  methods: {
    itemClicked: function(review) {
      this.name = review.name;
      this.state = review.state;
      this.company = review.company;
      this.profilepic = review.profilepic;
      this.Users = review.Users;
      this.Overall = review.Overall;
      this.Responded_in_a_timely_manner = review.Responded_in_a_timely_manner;
      this.Answered_questions_clearly = review.Answered_questions_clearly;
      this.Understood_needs = review.Understood_needs;
      this.Gave_complete_and_clear_information = review.Gave_complete_and_clear_information;
      this.Knowledgeable_in_legal_area = review.Knowledgeable_in_legal_area;
      this.Good_value_for_money = review.Good_value_for_money;
      this.Would_hire_again = review.Would_hire_again;
      this.Would_recommend_to_friend = review.Would_recommend_to_friend;
    }
  }
});


var cats = new Vue({
  el: '#form',
  data: {
    selected: 'Click to choose a legal category', 
    showSCModal: false,
    isHidden: false,
    categ: "",
    cats: [
      { text: 'Click to choose a legal category', value: 'Click to choose a legal category'},
      { text: 'Family', value: 'family'},
      { text: 'Criminal Defense', value: 'criminal defense'},
      { text: 'Business', value: 'business'},
      { text: 'Personal Injury', value: 'personal injury'},
      { text: 'Bankruptcy & Finances', value: 'bankruptcy & finances'},
      { text: 'Products & Services', value: 'products & services'},
      { text: 'Employment', value: 'employment'},
      { text: 'Real Estate', value: 'real estate'},
      { text: 'Immigration', value: 'immigration' },
      { text: 'Wills, Trust & Estates', value: 'wills, trust & estates' },
      { text: 'Government', value: '' },
      { text: 'Intelectual Property', value: 'intelectual property' }
    ],
    families: [
      { option: "Addoption" },
      { option: "Child Support" },
      { option: "Guardianship" },
      { option: "Separations" },
      { option: "Child Custody and Visitations" },
      { option: "Divorce" },
      { option: "Paternity" },
      { option: "Sousal Support and Alimony" },
    ],
    criminal_defenses: [
      { option: "Criminal Defense 1" },
      { option: "Criminal Defense 2" },
      { option: "Criminal Defense 3" },
      { option: "Criminal Defense 4" },
      { option: "Criminal Defense 5" },
      { option: "Criminal Defense 6" },
      { option: "Criminal Defense 6" },
      { option: "Criminal Defense 8" },
    ],
    dummies: [
      { option: "Dummy 1" },
      { option: "Dummy 2" },
      { option: "Dummy 3" },
      { option: "Dummy 4" },
      { option: "Dummy 5" },
      { option: "Dummy 6" },
      { option: "Dummy 6" },
      { option: "Dummy 8" },
    ],
    others: [
      { option: "Abuse (Child, Domestic, Sexual)" },
      { option: "Agencies & Administration" },
      { option: "Automobile ( DUI, Crimes, Speeding )" },
      { option: "Automobiles ( Accidents, Insurance )" },
      { option: "Banking ( Business, Consumer )" },
      { option: "Bars & Restaurants" },
      { option: "Business Formation & Dissolution" },
      { option: "Children (Adoption, Custody, Support)" },
      { option: "Class Actions (Bad Drugs, Products)" },
      { option: "Commercial Law and Contracts" },
      { option: "Commercial Real Estate" },
      { option: "Constitutional Law" },
      { option: "Construction (Disputes, Liens)" },
      { option: "Categories Item Here" },
    ],

  },
  methods: {
    onChange:function(cat){
     console.log(event.target.value);
     this.categ = event.target.value;
    },
    getOthers(cat) {
      this.categ = "othercats";
      console.log(this.categ);
    },
  }
});

// Use the arrow keys to navigate, tab to choose first result, enter or mouse to choose selected item.
const standardItems = [
  "Nowheresvlle, xx 00000",
  "Righthere, yy 10000",
];
const Autocomplete = Vue.component("autocomplete", {
  template: "#autocomplete-tpl",
  props: ["items", "placeholder", "label", "textarea", "rows", "cols"],
  data() {
    return {
      id: 'input-' + parseInt(Math.random() * 1000),
      inputValue: "",
      searchMatch: [],
      selectedIndex: 0,
      clickedChooseItem: false,
      wordIndex: 0
    };
  },
  computed: {
    listToSearch() {
      if (typeof this.items !== "undefined" && this.items.length > 0) {
        return this.items;
      } else {
        return standardItems;
      }
    },
    currentWord() {
      return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(' ')[this.wordIndex];
    },
    inputSplitted() {
      return this.inputValue.replace(/(\r\n|\n|\r)/gm, ' ').split(" ");
    }
  },
  watch: {
    inputValue() {
      this.focus();
      console.log(this.inputSplitted)
      this.selectedIndex = 0;
      this.wordIndex = this.inputSplitted.length - 1;
    }
  },
  methods: {
    highlightWord(word) {
      const regex = new RegExp("(" + this.currentWord + ")", "g");
      return word.replace(regex, '<mark>$1</mark>');
    },
    setWord(word) {
      let currentWords = this.inputValue.replace(/(\r\n|\n|\r)/gm, '__br__ ').split(' ');
      currentWords[this.wordIndex] = currentWords[this.wordIndex].replace(this.currentWord, word + ' ');
      this.wordIndex += 1;
      this.inputValue = currentWords.join(' ').replace(/__br__\s/g, '\n');
    },
    moveDown() {
      if (this.selectedIndex < this.searchMatch.length - 1) {
        this.selectedIndex++;
      }
    },
    moveUp() {
      if (this.selectedIndex !== -1) {
        this.selectedIndex--;
      }
    },
    selectItem(index) {
      this.selectedIndex = index;
      this.chooseItem();
    },
    chooseItem(e) {
      this.clickedChooseItem = true;

      if (this.selectedIndex !== -1 && this.searchMatch.length > 0) {
        if (e) {
          e.preventDefault();
        }
        this.setWord(this.searchMatch[this.selectedIndex]);
        this.selectedIndex = -1;
      }
    },
    focusout(e) {
      setTimeout(() => {
        if (!this.clickedChooseItem) {
          this.searchMatch = [];
          this.selectedIndex = -1;
        }
        this.clickedChooseItem = false;
      }, 100);
    },
    focus() {
      this.searchMatch = [];
      if (this.currentWord !== "") {
        this.searchMatch = this.listToSearch.filter(
          el => el.indexOf(this.currentWord) >= 0
        );
      }
      if (
        this.searchMatch.length === 1 &&
        this.currentWord === this.searchMatch[0]
      ) {
        this.searchMatch = [];
      }
    }
  }
});

new Vue({
  el: "#auto"
});

// Thanks: https://github.com/component/textarea-caret-position
(function(){function e(b,e,f){if(!h)throw Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");if(f=f&&f.debug||!1){var a=document.querySelector("#input-textarea-caret-position-mirror-div");a&&a.parentNode.removeChild(a)}a=document.createElement("div");a.id="input-textarea-caret-position-mirror-div";document.body.appendChild(a);var c=a.style,d=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,k="INPUT"===b.nodeName;c.whiteSpace="pre-wrap";k||(c.wordWrap=
"break-word");c.position="absolute";f||(c.visibility="hidden");l.forEach(function(a){k&&"lineHeight"===a?c.lineHeight=d.height:c[a]=d[a]});m?b.scrollHeight>parseInt(d.height)&&(c.overflowY="scroll"):c.overflow="hidden";a.textContent=b.value.substring(0,e);k&&(a.textContent=a.textContent.replace(/\s/g,"\u00a0"));var g=document.createElement("span");g.textContent=b.value.substring(e)||".";a.appendChild(g);b={top:g.offsetTop+parseInt(d.borderTopWidth),left:g.offsetLeft+parseInt(d.borderLeftWidth),height:parseInt(d.lineHeight)};
f?g.style.backgroundColor="#aaa":document.body.removeChild(a);return b}var l="direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" "),h="undefined"!==typeof window,m=h&&null!=window.mozInnerScreenX;
"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e:h&&(window.getCaretCoordinates=e)})();