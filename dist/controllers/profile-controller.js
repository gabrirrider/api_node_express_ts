var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProfileService } from "../services/profile-service.js";
export class ProfileController {
    constructor() {
        this.profileService = new ProfileService();
    }
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, profession, balance, type } = req.body;
                const newProfile = yield this.profileService.createProfile(firstName, lastName, profession, balance, type);
                return res.status(201).json(newProfile);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to create profile", error });
            }
        });
    }
    getAllProfiles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const profiles = yield this.profileService.getAllProfiles();
                return res.status(200).json(profiles);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch profiles", error });
            }
        });
    }
    getProfileBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileId = parseInt(req.params.profileId);
            try {
                const balance = yield this.profileService.getProfileBalance(profileId);
                return res.status(200).json({ balance });
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to fetch profiles balance", error });
            }
        });
    }
    updateProfileBalance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileId = parseInt(req.params.id);
            const amount = req.body.amount;
            try {
                const updatedProfile = yield this.profileService.updateBalance(profileId, amount);
                return res.status(200).json(updatedProfile);
            }
            catch (error) {
                return res.status(500).json({ message: "Failed to update balance", error });
            }
        });
    }
}
