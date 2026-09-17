const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1545322856274071592';

const featureData = {
  music: {
    label: 'Music', icon: '♫', title: 'Music Commands', subtitle: 'Playback, queue, playlists, 24/7 and music controls.',
    showcaseTitle: 'Feel the beat together.', showcaseText: 'Play songs, control queues, use 24/7 voice mode, playlists and server-specific music prefixes.',
    commands: [
      ['-o <song>', 'Play music using the default OXO music prefix.'],
      ['<custom prefix> <song>', 'Play music after a server owner changes the shared music/gambling prefix.'],
      ['/prefix prefix:-z', 'Set the server custom prefix. Example: music becomes -z <song>.'],
      ['oxo play <song>', 'Play a song or search query.'],
      ['oxo p <song>', 'Short alias for play.'],
      ['oxo pause / oxo ps', 'Pause the current track.'],
      ['oxo resume / oxo rs', 'Resume paused music.'],
      ['oxo skip / oxo sk', 'Skip the current song.'],
      ['oxo stop / oxo x', 'Stop playback.'],
      ['-o stop', 'Stop playback using the default music prefix.'],
      ['oxo queue', 'Show the current music queue.'],
      ['oxo mq / oxo musicq', 'Queue shortcuts. oxo q stays reserved for quests.'],
      ['oxo np / oxo n', 'Show the currently playing song.'],
      ['oxo volume <1-100> / oxo v', 'Change music volume.'],
      ['oxo remove <position>', 'Remove a queued track by position.'],
      ['oxo shuffle / oxo sf', 'Shuffle the queue.'],
      ['oxo loop / oxo lp', 'Toggle looping.'],
      ['oxo join / oxo j', 'Join your voice channel.'],
      ['oxo leave / oxo lv', 'Leave the voice channel.'],
      ['oxo playlist / oxo pl', 'Open or use playlist support.'],
      ['oxo addplaylist', 'Add a playlist to the queue.'],
      ['/music playlist', 'Slash-command playlist access.'],
      ['oxo 24/7', 'Keep OXO connected in the voice channel.'],
      ['oxo 247 off', 'Turn 24/7 voice mode off.'],
      ['oxo 247 status', 'Check 24/7 voice status.']
    ]
  },
  economy: {
    label: 'Economy', icon: '◈', title: 'Economy & Gambling', subtitle: 'Coins, rewards, shop, work and shared-prefix gambling.',
    showcaseTitle: 'Build your OXO balance.', showcaseText: 'Earn coins, manage your wallet, shop, transfer currency and play supported gambling games.',
    commands: [
      ['/oxo profile', 'Open your OXO profile.'],
      ['/oxo balance', 'Check your current coin balance.'],
      ['/oxo daily', 'Claim the daily reward.'],
      ['/oxo weekly', 'Claim the weekly reward.'],
      ['/oxo work', 'Work for coins.'],
      ['/oxo deposit', 'Deposit coins.'],
      ['/oxo withdraw', 'Withdraw coins.'],
      ['/oxo givecoins', 'Transfer coins to another user.'],
      ['/oxo shop', 'Open the OXO shop.'],
      ['/oxo buy', 'Buy an item from the shop.'],
      ['/oxo games coinflip', 'Play coinflip.'],
      ['/oxo games dice', 'Play dice.'],
      ['/oxo games slots', 'Play slots.'],
      ['/oxo games blackjack', 'Play blackjack.'],
      ['/oxo games joke', 'Get a joke from the games system.'],
      ['-z cf 500 h', 'Example custom-prefix coinflip: bet 500 on heads.'],
      ['-z dice 500', 'Example custom-prefix dice bet.'],
      ['-z slots 500', 'Example custom-prefix slots bet.'],
      ['-z bj 500', 'Example custom-prefix blackjack bet.']
    ]
  },
  battle: {
    label: 'Battle & Pets', icon: '⚔', title: 'Battle, Pets & Adventure', subtitle: 'Creatures, pet squads, bosses, adventure and progression.',
    showcaseTitle: 'Collect. Upgrade. Fight.', showcaseText: 'Hunt creatures, build pet squads, battle bosses and progress through OXO adventure systems.',
    commands: [
      ['/oxo hunt', 'Hunt for a creature.'],
      ['/oxo catch', 'Catch a discovered creature.'],
      ['/oxo zoo', 'View your creature collection.'],
      ['/oxo creatures', 'Browse creature information.'],
      ['/oxo sell', 'Sell a creature or supported item.'],
      ['/oxo battle', 'Start a pet/adventure battle.'],
      ['/oxo pet-upgrade', 'Upgrade one of your pets.'],
      ['/oxo adventure dashboard', 'Open the adventure dashboard.'],
      ['/oxo adventure quests', 'View adventure quests.'],
      ['/oxo adventure lootbox', 'Open adventure lootbox features.'],
      ['/oxo adventure event', 'View the current adventure event.'],
      ['/oxo adventure boss', 'Fight an adventure boss with your pets.'],
      ['/oxo adventure achievements', 'View adventure achievements.'],
      ['/oxo adventure title', 'Manage adventure titles.'],
      ['/oxo adventure market', 'Open the adventure market.'],
      ['/oxo adventure leaderboard', 'View adventure rankings.'],
      ['/oxo mining mine', 'Mine for supported rewards/resources.'],
      ['/oxo mining rig', 'Open or manage the mining rig.']
    ]
  },
  social: {
    label: 'Social', icon: '♡', title: 'Social & Reaction Commands', subtitle: 'Marriage, reactions, anime GIF interactions and fun community commands.',
    showcaseTitle: 'More fun together.', showcaseText: 'Use OXO social interactions with friends, partners and random members with animated reactions.',
    commands: [
      ['/marry @user', 'Send a marriage proposal with an accept flow.'],
      ['oxo marry @user', 'Text-command marriage proposal.'],
      ['oxo divorce', 'Public divorce interaction.'],
      ['oxo kiss @user', 'Send an anime kiss reaction.'],
      ['oxo hug @user', 'Hug a mentioned user.'],
      ['oxo hug someone', 'Pick a random member and hug them.'],
      ['oxo pat @user', 'Pat a user.'],
      ['oxo slap @user', 'Slap a user with an anime reaction.'],
      ['oxo kick @user', 'Kick-style reaction command.'],
      ['oxo punch @user', 'Punch-style reaction command.'],
      ['oxo bully @user', 'Playful bully reaction command.'],
      ['oxo kill @user', 'Anime-style dramatic reaction command.'],
      ['oxo jawra @user', 'Annoy/jawra reaction command.'],
      ['oxo cudanir fua @user', 'Crowd-style slap/kick reaction.'],
      ['oxo pervert', 'Playful pervert reaction command.'],
      ['oxo luccha @user', 'Playful luccha reaction command.']
    ]
  },
  utility: {
    label: 'Utility', icon: '⌘', title: 'Utility, Profile & Help', subtitle: 'Help, profiles, shortcuts, server prefix and useful navigation.',
    showcaseTitle: 'Find everything quickly.', showcaseText: 'OXO keeps common utilities short, searchable and easy to use from slash commands or text triggers.',
    commands: [
      ['/help', 'Open the main help menu.'],
      ['/oxo help', 'Browse OXO command categories.'],
      ['/prefix prefix:-z', 'Change the shared custom prefix for supported music and gambling commands.'],
      ['oxo profile', 'Open your OXO profile.'],
      ['oxp', 'Short profile trigger.'],
      ['oxo sc', 'Show OXO shortcut commands.'],
      ['oxo server check', 'Show servers OXO is added to when available to the owner/admin context.']
    ]
  },
  moderation: {
    label: 'Moderation / VC', icon: '◇', title: 'Server, Leveling & Voice Tools', subtitle: 'Server controls, leveling channels and automatic VC loudness protection.',
    showcaseTitle: 'Keep the server cleaner.', showcaseText: 'Server owners can configure supported channels while OXO can automatically react to excessive VC loudness when enabled in the bot build.',
    commands: [
      ['/oxo channel', 'Configure the channel used by the OXO leveling/message-reward system.'],
      ['/prefix prefix:-z', 'Set the server custom prefix for supported music and gambling features.'],
      ['Auto VC loudness protection', 'Automatic voice loudness handling; no public toggle command in the current design.'],
      ['50 messages → 5,000 coins', 'Leveling/activity reward milestone.'],
      ['100 messages → 15,000 coins', 'Higher activity reward milestone.']
    ]
  },
  recipes: {
    label: 'Recipes & Sayeri', icon: '✦', title: 'Bangla Recipes & Poetry', subtitle: 'Bangladeshi recipes, detailed cooking views and Bangla sayeri.',
    showcaseTitle: 'Food and feelings, OXO style.', showcaseText: 'Browse Bangla recipes with ingredients, spices, time, servings and detailed methods, plus Bangla sayeri.',
    commands: [
      ['oxo recipe biriyani', 'Open the biriyani recipe.'],
      ['oxo recipe tehari', 'Open the tehari recipe.'],
      ['oxo recipe shorshe ilish', 'Open the shorshe ilish recipe.'],
      ['oxo recipe aloo bhorta', 'Open the aloo bhorta recipe.'],
      ['oxo recipe bhapa pitha', 'Open the bhapa pitha recipe.'],
      ['oxo recipe borhani', 'Open the borhani recipe.'],
      ['oxo recipe fish', 'Browse fish recipes.'],
      ['oxo recipe random', 'Show a random recipe.'],
      ['oxo recipe list', 'Show the recipe catalog/categories.'],
      ['oxo sayeri bangla', 'Show Bangla sad / one-sided-love sayeri.']
    ]
  },
  owner: {
    label: 'Owner / Admin', icon: '♛', title: 'Owner & Admin Controls', subtitle: 'Private bot-owner utilities and management features.',
    showcaseTitle: 'Control OXO safely.', showcaseText: 'Owner-only controls are separated from public commands and should stay permission-checked inside the bot.',
    commands: [
      ['sts', 'Owner-only status command for total servers and member counts.'],
      ['oxo server check', 'Owner utility for checking the servers OXO is connected to.'],
      ['Owner coin controls', 'Set, add or decrease member coin balances.'],
      ['Owner gem controls', 'Add, remove or set member gems.'],
      ['Owner give controls', 'Special owner-only economy grant flow.']
    ]
  }
};

const tabs = document.getElementById('categoryTabs');
const commandList = document.getElementById('commandList');
const panelTitle = document.getElementById('panelTitle');
const panelSubtitle = document.getElementById('panelSubtitle');
const panelIcon = document.getElementById('panelIcon');
const commandCount = document.getElementById('commandCount');
const search = document.getElementById('commandSearch');
const noResults = document.getElementById('noResults');
const showcaseIcon = document.getElementById('showcaseIcon');
const showcaseLabel = document.getElementById('showcaseLabel');
const showcaseTitle = document.getElementById('showcaseTitle');
const showcaseText = document.getElementById('showcaseText');
const toast = document.getElementById('toast');
let currentCategory = 'music';

function escapeHTML(value='') {
  return value.replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1600);
}

function renderTabs() {
  tabs.innerHTML = Object.entries(featureData).map(([key, item]) => `
    <button class="category-tab ${key === currentCategory ? 'active' : ''}" data-category="${key}" role="tab" aria-selected="${key === currentCategory}">
      ${item.icon} ${item.label}
    </button>`).join('');
  tabs.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    search.value = '';
    renderTabs();
    renderCategory();
  }));
}

function renderCategory() {
  const item = featureData[currentCategory];
  const q = (search.value || '').trim().toLowerCase();
  const filtered = item.commands.filter(([cmd, desc]) => `${cmd} ${desc}`.toLowerCase().includes(q));

  panelTitle.textContent = item.title;
  panelSubtitle.textContent = item.subtitle;
  panelIcon.textContent = item.icon;
  showcaseIcon.textContent = item.icon;
  showcaseLabel.textContent = item.label.toUpperCase();
  showcaseTitle.textContent = item.showcaseTitle;
  showcaseText.textContent = item.showcaseText;
  commandCount.textContent = `${filtered.length} command${filtered.length === 1 ? '' : 's'}`;

  commandList.innerHTML = filtered.map(([cmd, desc]) => `
    <div class="command-row" tabindex="0" data-command="${escapeHTML(cmd)}" title="Click to copy">
      <code>${escapeHTML(cmd)}</code>
      <p>${escapeHTML(desc)}</p>
      <span class="copy-hint">COPY</span>
    </div>`).join('');

  noResults.hidden = filtered.length !== 0;
  commandList.querySelectorAll('.command-row').forEach(row => {
    const copy = async () => {
      try { await navigator.clipboard.writeText(row.dataset.command); showToast(`Copied: ${row.dataset.command}`); }
      catch { showToast('Copy is blocked by this browser — select the command manually.'); }
    };
    row.addEventListener('click', copy);
    row.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copy(); } });
  });
}

search?.addEventListener('input', renderCategory);
renderTabs();
renderCategory();

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, {rootMargin:'-42% 0px -50% 0px', threshold:0});
sections.forEach(section => sectionObserver.observe(section));

const form = document.getElementById('feedbackForm');
const formMessage = document.getElementById('formMessage');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  formMessage.className = 'form-message';
  formMessage.textContent = 'Submitting feedback…';
  await new Promise(r => setTimeout(r, 650));
  if ((data.feedback || '').trim().length < 10) {
    formMessage.classList.add('error');
    formMessage.textContent = 'Please add a little more detail to your feedback.';
    return;
  }
  const claimId = 'OXO-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  formMessage.classList.add('success');
  formMessage.textContent = `Feedback saved locally for demo — reward claim ${claimId}. Connect a backend/Discord login before issuing real rewards.`;
  form.reset();
});
