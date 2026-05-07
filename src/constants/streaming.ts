/** Single source for Mumbo Spotify URLs (pinned socials + embeds). */
export const MUMBO_SPOTIFY_ARTIST_URL =
	'https://open.spotify.com/artist/0v4RYCckfkFu4dXWl35BXl'

/** Spotify embed iframe `src` (artist player). */
export const MUMBO_SPOTIFY_EMBED_SRC =
	'https://open.spotify.com/embed/artist/0v4RYCckfkFu4dXWl35BXl?utm_source=generator'

/** Profile URL ([mumbobeatz on SoundCloud](https://soundcloud.com/mumbobeatz)). */
export const MUMBO_SOUNDCLOUD_PROFILE_URL = 'https://soundcloud.com/mumbobeatz'

/**
 * Official SoundCloud HTML5 widget — visual profile player (`visual=true`).
 * @see https://developers.soundcloud.com/docs/api/html5-widget
 */
export const MUMBO_SOUNDCLOUD_EMBED_SRC = `https://w.soundcloud.com/player/?${new URLSearchParams(
	{
		url: MUMBO_SOUNDCLOUD_PROFILE_URL,
		color: '#ff5500',
		auto_play: 'false',
		hide_related: 'false',
		show_comments: 'true',
		show_user: 'true',
		show_reposts: 'false',
		show_teaser: 'true',
		visual: 'true',
	}
).toString()}`

