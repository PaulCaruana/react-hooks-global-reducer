import useUserService, { sampleUsers } from "../UserService";
import {renderHook, act} from '@testing-library/react-hooks';

describe('User Service', () => {

    test("should fetch users", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useUserService());
        act(() => {
            result.current.fetchUsers();
        })
        expect(result.current.fetchingUsers).toBe(true);
        await waitForNextUpdate();
        expect(result.current.fetchingUsers).toBe(false);
        expect(result.current.users).toEqual(sampleUsers)
    });

});