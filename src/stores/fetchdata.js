import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import useLoading from './loading';

const useFetchData = defineStore('fetchdata', () => {
  const { setLoading } = useLoading();
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ErWcgn221jmQgnbN4UHLxfKg4YSfiu0nIBMs4nU2UQEFCdB7ya0aaq5sHVMd',
  };
  const rooms = ref([]);
  const selectedRoom = ref({
    booking: [],
    room: {},
  });
  const getAllRooms = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', { headers });
      rooms.value = res.data.items;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const getRoom = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${id}`, { headers });
      const { data } = res;
      [selectedRoom.value.room] = data.room;
      selectedRoom.value.booking = data.booking;
      console.log('HI', selectedRoom);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    rooms, getAllRooms, getRoom, selectedRoom,
  };
});

export default useFetchData;
