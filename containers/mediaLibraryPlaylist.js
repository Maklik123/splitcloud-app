import PlaylistContainer from './playlistContainer';
import withPlaylistProvider from './withPlaylistProvider';
import MediaLibraryApi from '../modules/MediaLibraryApi';

const playlistMap ={
  'album':'getAlbum',
  'artist':'getArtist'
};

export default withPlaylistProvider((props) => {
  let mediaPlayerApi = new MediaLibraryApi();
  let methodName = playlistMap[props.browseCategory];
  return mediaPlayerApi[methodName](props.playlist.label);
})(PlaylistContainer);